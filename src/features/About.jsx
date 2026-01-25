import React, { memo } from "react";
import { ShieldCheck, UserCheck, Zap, Heart, Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const About = () => {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const icons = [
    <ShieldCheck size={32} />,
    <UserCheck size={32} />,
    <Zap size={32} />,
    <Heart size={32} />,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: isMobile ? 10 : 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-slate-100 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading title={t.about.title} badge={t.about.yearsExcellence} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={
                isMobile ? {} : { y: -10, transition: { duration: 0.3 } }
              }
              className="group p-10 bg-white rounded-[2.5rem] text-center hover:rounded-3xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-gray-100 shadow-sm"
            >
              <div className="relative mb-8 inline-block">
                <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative bg-white text-primary w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-500">
                  {icons[index]}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
          </motion.div>
      </div>
    </section>
  );
};

export default memo(About);
