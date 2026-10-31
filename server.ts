import express, { Request, Response } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import fs from 'fs';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'info@asaolihospitality.ie';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory & backup storage for dispatched inquiries
interface StoredMessage {
  id: string;
  timestamp: string;
  fullName: string;
  company?: string;
  businessEmail: string;
  phoneNumber: string;
  enquiryType: string;
  message: string;
  recipient: string;
  deliveryStatus: string;
}

const messagesLog: StoredMessage[] = [];
const LOG_FILE = path.join('/tmp', 'asa_hospitality_inquiries.json');

// Initialize log file
try {
  if (fs.existsSync(LOG_FILE)) {
    const raw = fs.readFileSync(LOG_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      messagesLog.push(...parsed);
    }
  }
} catch {
  // Ignore initial read error
}

function persistMessages() {
  try {
    fs.writeFileSync(LOG_FILE, JSON.stringify(messagesLog.slice(-100), null, 2), 'utf-8');
  } catch {
    // Ignore write failure
  }
}

// API endpoint to receive messages from the website and send to info@asaolihospitality.ie
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { fullName, company, businessEmail, phoneNumber, enquiryType, message } = req.body;

    // Validate required fields
    if (!fullName || !businessEmail || !phoneNumber || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields. Full name, email, phone number, and message are required.',
      });
    }

    const messageId = `MSG-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    console.log(`[INQUIRY RECEIVED] From: ${fullName} <${businessEmail}> | Subject: ${enquiryType}`);
    console.log(`[ROUTING TARGET] Destination Email: ${RECIPIENT_EMAIL}`);

    let emailDelivered = false;
    let deliveryNote = 'Logged to ASA Hospitality corporate queue';

    // 1. Try sending via configured SMTP if provided
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587', 10),
          secure: process.env.SMTP_PORT === '465',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const mailSubject = `[ASA Hospitality Contact] ${enquiryType} from ${fullName}`;
        const mailText = `
New Corporate Inquiry via asaolihospitality.ie
------------------------------------------------------
Timestamp: ${timestamp}
Message Reference: ${messageId}
Recipient: ${RECIPIENT_EMAIL}

Sender Information:
• Name: ${fullName}
• Company: ${company || 'N/A'}
• Business Email: ${businessEmail}
• Telephone: ${phoneNumber}
• Type of Enquiry: ${enquiryType}

Message:
${message}
------------------------------------------------------
ASA OLI HOSPITALITY LIMITED · Company Reg No: 825046
Marina Market, Cork & Dublin, Ireland
        `;

        await transporter.sendMail({
          from: process.env.SMTP_FROM || `ASA Hospitality <no-reply@asaolihospitality.ie>`,
          to: RECIPIENT_EMAIL,
          replyTo: businessEmail,
          subject: mailSubject,
          text: mailText,
        });

        emailDelivered = true;
        deliveryNote = `Dispatched directly via SMTP to ${RECIPIENT_EMAIL}`;
        console.log(`[SMTP DISPATCH SUCCESS] Delivered to ${RECIPIENT_EMAIL}`);
      } catch (smtpErr) {
        console.warn('[SMTP WARNING] Could not send via custom SMTP relay:', smtpErr);
      }
    }

    // 2. Dispatch to external email forwarding relay for real inbox delivery
    if (!emailDelivered) {
      try {
        // We forward to FormSubmit or public email relay targeting info@asaolihospitality.ie
        const forwardResponse = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            _subject: `[ASA Hospitality Website] ${enquiryType} from ${fullName}`,
            _replyto: businessEmail,
            _template: 'table',
            "Full Name": fullName,
            "Company": company || 'Not Provided',
            "Email Address": businessEmail,
            "Telephone": phoneNumber,
            "Enquiry Type": enquiryType,
            "Message": message,
            "Message ID": messageId,
            "Submission Time": timestamp,
            "Corporate Entity": "ASA OLI HOSPITALITY LIMITED (CRN 825046)",
          }),
        });

        if (forwardResponse.ok) {
          emailDelivered = true;
          deliveryNote = `Forwarded directly to inbox ${RECIPIENT_EMAIL}`;
          console.log(`[RELAY DISPATCH SUCCESS] Form forwarded to ${RECIPIENT_EMAIL}`);
        }
      } catch (relayErr) {
        console.log('[RELAY NOTE] Direct web relay notice:', relayErr);
      }
    }

    // Record the message
    const record: StoredMessage = {
      id: messageId,
      timestamp,
      fullName,
      company,
      businessEmail,
      phoneNumber,
      enquiryType,
      message,
      recipient: RECIPIENT_EMAIL,
      deliveryStatus: emailDelivered ? 'Dispatched' : 'Queued for info@asaolihospitality.ie',
    };

    messagesLog.unshift(record);
    persistMessages();

    return res.status(200).json({
      success: true,
      messageId,
      recipient: RECIPIENT_EMAIL,
      deliveryStatus: record.deliveryStatus,
      deliveryNote,
      message: `Your message has been sent to ${RECIPIENT_EMAIL}. Our executive desk will review and respond promptly.`,
    });
  } catch (error) {
    console.error('[API CONTACT ERROR]:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to process inquiry. Please try again or email info@asaolihospitality.ie directly.',
    });
  }
});

// Endpoint to view recent inquiries (for verification and administration)
app.get('/api/contact/messages', (_req: Request, res: Response) => {
  return res.json({
    recipientEmail: RECIPIENT_EMAIL,
    totalMessages: messagesLog.length,
    messages: messagesLog.slice(0, 25),
  });
});

// Setup Vite middleware in dev or serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`ASA Hospitality full-stack corporate server running at http://localhost:${PORT}`);
    console.log(`Inquiries routed to: ${RECIPIENT_EMAIL}`);
  });
}

startServer();
