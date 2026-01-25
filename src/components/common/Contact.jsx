import React from "react";
import { MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { APP_CONFIG } from "../../constants/appConstants";
const Contact = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="تواصل معنا"
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Info Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <ContactCard
              variants={itemVariants}
              icon={<MapPin size={24} />}
              title={t.contact.location}
              desc={APP_CONFIG.LOCATION}
              href="https://maps.app.goo.gl/fUST86ci4CLxFbkF6" // Google Maps link
              color="bg-blue-50 text-blue-600"
            />
            <ContactCard
              variants={itemVariants}
              icon={<Phone size={24} />}
              title={t.contact.phone}
              desc={APP_CONFIG.PHONE}
              href={`tel:${APP_CONFIG.PHONE}`}
              color="bg-green-50 text-green-600"
              ltr
            />
            <ContactCard
              variants={itemVariants}
              icon={<MessageCircle size={24} />}
              title="واتساب"
              desc={APP_CONFIG.WHATSAPP}
              href={APP_CONFIG.WHATSAPP_URL}
              color="bg-emerald-50 text-emerald-600"
              ltr
            />
            <ContactCard
              variants={itemVariants}
              icon={<Clock size={24} />}
              title={t.contact.hours}
              desc={t.contact.hoursDesc}
              color="bg-purple-50 text-purple-600"
            />
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group/map min-h-[400px] rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-200/50 border-8 border-white transition-transform duration-500 hover:scale-[1.01]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.8175182566793!2d31.7088969!3d30.1566328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f720c20e4c65%3A0x957dd95b132eee3f!2z2LbZitmI2YEg2KfZhNix2K3ZhdmGINmF2YjZhA!5e0!3m2!1sen!2seg!4v1768760531629!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
              className="absolute inset-0 transition-all duration-700"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900/20 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, desc, color, ltr, href, variants }) => {
  const CardContent = (
    <>
      <div
        className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h4 className="text-xl font-black text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h4>
      <div
        className={`text-gray-500 font-medium leading-relaxed pt-1 ${
          ltr ? "ltr text-start" : ""
        }`}
      >
        {desc}
      </div>
    </>
  );

  return (
    <motion.div variants={variants}>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="group block h-full bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:-translate-y-1"
        >
          {CardContent}
        </a>
      ) : (
        <div className="group h-full bg-white p-8 rounded-[2rem] shadow-sm transition-all duration-500 border border-gray-100/50">
          {CardContent}
        </div>
      )}
    </motion.div>
  );
};

export default Contact;
