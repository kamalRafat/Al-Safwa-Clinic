import { CLINIC_PHONE_NUMBER } from "../constants/whatsappMessage";

/**
 * Opens WhatsApp chat with a pre-filled message
 * @param {string} message The encoded message string
 */
export const openWhatsAppChat = (message) => {
  const url = `https://wa.me/${CLINIC_PHONE_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
