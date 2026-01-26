import React, { memo } from "react";
import { motion } from "framer-motion";
import { content as t } from "../constants/content";
import SectionHeading from "../components/common/SectionHeading";
import BeforeAfterSlider from "../components/common/BeforeAfterSlider";
import case1Before from "../assets/1be.webp";
import case1After from "../assets/1af.webp";
import case2Before from "../assets/be3.webp";
import case2After from "../assets/af3.webp";
import case3Before from "../assets/be2.webp";
import case3After from "../assets/af2.webp";

const BeforeAfter = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
      label: "تبييض الأسنان",
      before: case3Before,
      after: case3After,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: isMobile ? 10 : 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="results" className="py-20 md:py-32 bg-slate-100">
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
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
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

export default memo(BeforeAfter);
