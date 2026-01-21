import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../hooks/useLanguage";
import SectionHeading from "../components/common/SectionHeading";
import BeforeAfterSlider from "../components/common/BeforeAfterSlider";

import case1Before from "../assets/1be.jpg";
import case1After from "../assets/1af.jpg";
import case2Before from "../assets/be3.jpeg";
import case2After from "../assets/af3.jpeg";
import case3Before from "../assets/be2.jpg";
import case3After from "../assets/af2.jpg";

const BeforeAfter = () => {
  const { t } = useLanguage();
  const cases = [
    {
      label: "تصميم ابتسامة هوليوود",
      before: case1Before,
      after: case1After,
    },
    {
      label: "زراعة الأسنان الكاملة",
      before: case2Before,
      after: case2After,
    },
    {
      label: "تبييض الأسنان بالليزر",
      before: case3Before,
      after: case3After,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="results" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={t.common.resultsBadge}
          title={t.common.resultsTitle}
          subtitle={t.common.resultsDesc}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 items-start"
        >
          {cases.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <BeforeAfterSlider
                label={item.label}
                beforeImage={item.before}
                afterImage={item.after}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
