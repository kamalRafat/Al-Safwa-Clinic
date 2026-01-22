import React, { memo } from "react";
import {
  Sparkles,
  Anchor,
  Smile,
  ScanFace,
  Activity,
  Baby,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const Services = () => {
  const { t } = useLanguage();

  const icons = [
    <Sparkles size={32} />,
    <Anchor size={32} />,
    <Smile size={32} />,
    <ScanFace size={32} />,
    <Activity size={32} />,
    <Baby size={32} />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="خبراؤنا يهتمون بك"
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

              <div className="relative text-primary mb-8 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center transform group-hover:rotate-[360deg] transition-transform duration-1000 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/20">
                {icons[index] || <Sparkles size={32} />}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {service.desc}
              </p>

              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300">
                <ChevronRight size={20} className="rtl:rotate-180" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Services);
