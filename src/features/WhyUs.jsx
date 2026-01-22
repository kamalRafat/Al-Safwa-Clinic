import React from "react";
import { CheckCircle2, ShieldCheck, Smile } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import img from "../assets/ee.jpeg";

const WhyUs = () => {
  const { t } = useLanguage();

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
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl shadow-black/20 hover:rotate-0 transition-transform duration-700 border-8 border-white/10">
              <img
                src={img}
                alt="Dental Consultation"
                className="w-full h-[500px] object-cover"
                loading="lazy"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div className="absolute -bottom-10 -end-10 bg-white p-8 rounded-3xl shadow-2xl hidden md:block z-20">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary">
                  <Smile size={32} />
                </div>
                <span className="text-4xl font-black text-gray-900">99%</span>
              </div>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {t.whyUs.patientSatisfaction}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:w-7/12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-bold mb-6 border border-white/20"
            >
              <ShieldCheck size={18} className="text-white" />
              <span>{t.whyUs.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight"
            >
              {t.whyUs.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 mb-12 max-w-2xl leading-relaxed font-medium"
            >
              {t.whyUs.desc}
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {t.whyUs.reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 p-5 rounded-2xl transition-all duration-300 border border-white/10 hover:border-white/30"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg font-bold">{reason}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
