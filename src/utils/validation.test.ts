import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEmail, validatePhone, validateInquiry } from './validation.ts';

test('validateEmail correctly accepts valid corporate email formats', () => {
  assert.equal(validateEmail('info@asaolihospitality.ie'), true);
  assert.equal(validateEmail('ankit.oli@asaolihospitality.ie'), true);
  assert.equal(validateEmail('partner@group.eu'), true);
});

test('validateEmail rejects malformed emails', () => {
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('plainaddress'), false);
  assert.equal(validateEmail('@missingusername.com'), false);
  assert.equal(validateEmail('user@domain'), false);
});

test('validatePhone validates Irish and international phone formats', () => {
  assert.equal(validatePhone('+353 83 380 8675'), true);
  assert.equal(validatePhone('+353833808675'), true);
  assert.equal(validatePhone('0833808675'), true);
  assert.equal(validatePhone('123'), false);
  assert.equal(validatePhone('not-a-number'), false);
});

test('validateInquiry validates full inquiry submission structure', () => {
  const validData = {
    fullName: 'David Sterling',
    company: 'Sterling Hospitality Partners',
    businessEmail: 'david@sterling.ie',
    phoneNumber: '+353 83 380 8675',
    enquiryType: 'Franchise Partnership',
    message: 'We are interested in discussing master franchise development in Ireland.',
  };
  const result = validateInquiry(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);

  const invalidData = {
    fullName: '',
    businessEmail: 'bad-email',
    phoneNumber: '333',
    enquiryType: '',
    message: 'short',
  };
  const invalidResult = validateInquiry(invalidData);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.businessEmail);
  assert.ok(invalidResult.errors.phoneNumber);
  assert.ok(invalidResult.errors.enquiryType);
  assert.ok(invalidResult.errors.message);
});
