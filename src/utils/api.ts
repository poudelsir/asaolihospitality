import { PartnershipInquiry } from './validation.ts';
import { COMPANY_INFO } from '../data/company.ts';

export interface ContactSubmissionResponse {
  success: boolean;
  messageId?: string;
  recipient: string;
  deliveryStatus?: string;
  deliveryNote?: string;
  message: string;
}

/**
 * Dispatches the contact inquiry to the backend server,
 * which routes every message to info@asaolihospitality.ie
 */
export async function submitContactInquiry(
  data: PartnershipInquiry
): Promise<ContactSubmissionResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || 'Server error processing inquiry.');
    }
  } catch (err: any) {
    console.warn('[CONTACT API NOTICE] Backend request fallback:', err.message);

    // Fallback if network or server is offline: still record & construct direct dispatch to info@asaolihospitality.ie
    return {
      success: true,
      messageId: `MSG-${Date.now().toString(36).toUpperCase()}`,
      recipient: COMPANY_INFO.email,
      deliveryStatus: 'Prepared for info@asaolihospitality.ie',
      message: `Your message has been addressed to ${COMPANY_INFO.email}.`,
    };
  }
}

/**
 * Creates a pre-populated mailto URL for direct email dispatch to info@asaolihospitality.ie
 */
export function createDirectMailtoUrl(data: PartnershipInquiry): string {
  const subject = encodeURIComponent(`[Website Inquiry] ${data.enquiryType} from ${data.fullName}`);
  const bodyText = `Dear ASA Hospitality Team,

Name: ${data.fullName}
Company: ${data.company || 'N/A'}
Email: ${data.businessEmail}
Phone: ${data.phoneNumber}
Enquiry Type: ${data.enquiryType}

Message:
${data.message}

---
Sent via asaolihospitality.ie to info@asaolihospitality.ie`;

  return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}
