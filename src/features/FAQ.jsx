import React, { useState, memo } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const FAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <motion.div
            animate={isMobile ? {} : { rotate: [12, -12, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-primary shadow-xl shadow-blue-100"
          >
            <HelpCircle size={40} />
          </motion.div>
        </div>

        <SectionHeading title={t.faq.title} subtitle={t.faq.subtitle} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          className="space-y-4"
        >
          {t.faq.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group border rounded-[2rem] transition-all duration-500 overflow-hidden ${
                openIndex === index
                  ? "border-primary/30 shadow-2xl shadow-primary/10 bg-white"
                  : "border-gray-100 bg-white hover:bg-white hover:border-gray-200"
              }`}
            >
              <button
                className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-start focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-primary"
                      : "text-gray-900 group-hover:text-primary"
                  }`}
                >
                  {item.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${
                    openIndex === index
                      ? "bg-primary text-white border-primary rotate-180 shadow-lg shadow-primary/30"
                      : "border-gray-200 text-gray-400 group-hover:border-primary group-hover:text-primary"
                  }`}
                >
                  <ChevronDown size={18} />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 md:px-8 pb-6 md:pb-8 text-gray-500 leading-relaxed font-medium text-base md:text-lg border-t border-gray-50 pt-6">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(FAQ);
