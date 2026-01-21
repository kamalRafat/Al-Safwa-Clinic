/**
 * Formats a phone number for tel: links
 * Ensures the number includes country code and removes spaces/special chars
 * @param {string} phoneNumber - The phone number to format
 * @returns {string} - Formatted phone number for tel: protocol
 */
export const formatPhoneNumber = (phoneNumber) => {
  if (!phoneNumber) return "";

  // Remove all spaces, dashes, and parentheses
  return phoneNumber.replace(/[\s\-()]/g, "");
};

/**
 * Creates a tel: link from a phone number
 * @param {string} phoneNumber - The phone number
 * @returns {string} - Complete tel: link
 */
export const createTelLink = (phoneNumber) => {
  return `tel:${formatPhoneNumber(phoneNumber)}`;
};

/**
 * Formats phone number for display (human-readable)
 * @param {string} phoneNumber - The phone number
 * @returns {string} - Formatted display number
 */
export const formatPhoneForDisplay = (phoneNumber) => {
  if (!phoneNumber) return "";

  // Remove country code prefix for display
  const cleaned = phoneNumber.replace(/^\+20/, "0");

  // Format as: 0XXX XXX XXXX
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }

  return cleaned;
};
