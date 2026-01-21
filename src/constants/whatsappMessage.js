import { CONTACT_INFO } from "./contact";

export const CLINIC_PHONE_NUMBER = CONTACT_INFO.PHONE;

export const WHATSAPP_MESSAGE_TEMPLATE = `*** حجز موعد جديد ***

الاسم: {{name}}
رقم الموبايل: {{phone}}
الطبيب المختار: {{doctor}}
تاريخ الموعد : {{date}}
وقت الكشف : {{time}}
ملاحظات المريض :
{{notes}}

يرجى مراجعة الطلب والتواصل مع المريض لتأكيد الموعد.
`;
