/**
 * Utility functions for form validation and data sanitization
 */

export interface PartnershipInquiry {
  fullName: string;
  company: string;
  businessEmail: string;
  phoneNumber: string;
  enquiryType: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validatePhone(phone: string): boolean {
  if (!phone || typeof phone !== 'string') return false;
  // Accepts standard international/Irish numbers: e.g. +353 83 380 8675 or 083 380 8675
  const cleanPhone = phone.replace(/[\s\-\(\)\.]/g, '');
  return cleanPhone.length >= 7 && /^\+?[0-9]{7,15}$/.test(cleanPhone);
}

export function validateInquiry(inquiry: Partial<PartnershipInquiry>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!inquiry.fullName || inquiry.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }

  if (!inquiry.businessEmail || !validateEmail(inquiry.businessEmail)) {
    errors.businessEmail = 'Please provide a valid corporate email address.';
  }

  if (!inquiry.phoneNumber || !validatePhone(inquiry.phoneNumber)) {
    errors.phoneNumber = 'Please provide a valid direct contact telephone number.';
  }

  if (!inquiry.enquiryType || inquiry.enquiryType.trim().length === 0) {
    errors.enquiryType = 'Please select the nature of your partnership or enquiry.';
  }

  if (!inquiry.message || inquiry.message.trim().length < 10) {
    errors.message = 'Please provide a brief message outlining your interest (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatIrishPhone(phone: string): string {
  if (!phone) return '';
  return phone.trim();
}
