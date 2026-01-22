import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  const alignmentClass = centered ? "text-center mx-auto" : "text-start";
  const marginClass = centered ? "mx-auto" : "";

  return (
    <div className={`mb-20 ${alignmentClass} ${className}`}>
      {badge && (
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-5xl font-black text-gray-900 mb-6`}>
        {title}
      </h2>
      <div
        className={`w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mb-6 ${marginClass}`}
      ></div>
      {subtitle && (
        <p
          className={`text-gray-600 max-w-2xl text-lg leading-relaxed ${marginClass}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default React.memo(SectionHeading);
