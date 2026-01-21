import { useState } from "react";
import { WHATSAPP_MESSAGE_TEMPLATE } from "../constants/whatsappMessage";
import { openWhatsAppChat } from "../utils/openWhatsAppChat";

export const useAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.doctor) newErrors.doctor = "يرجى اختيار الطبيب";
    if (!formData.date) newErrors.date = "يرجى اختيار التاريخ";
    if (!formData.time) newErrors.time = "يرجى اختيار الوقت";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const generateWhatsAppMessage = (data) => {
    return WHATSAPP_MESSAGE_TEMPLATE.replace("{{name}}", data.name)
      .replace("{{phone}}", data.phone)
      .replace("{{doctor}}", data.doctor)
      .replace("{{date}}", data.date)
      .replace("{{time}}", data.time)
      .replace("{{notes}}", data.notes || "لا يوجد");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const message = generateWhatsAppMessage(formData);
      openWhatsAppChat(message);
    } catch (error) {
      console.error("WhatsApp redirect failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
};
