import React from "react";
import { motion } from "framer-motion";

const StatItem = ({ icon, value, label, className = "" }) => (
  <div
    className={`space-y-1 text-center lg:text-start ${className}`}
    aria-label={`${label}: ${value}`}
  >
    <div className="flex justify-center lg:justify-start items-center gap-2 mb-1">
      {icon}
      <span className="text-2xl font-black text-gray-900" aria-hidden="true">
        {value}
      </span>
    </div>
    <p className="text-sm text-gray-500 font-medium" aria-hidden="true">
      {label}
    </p>
  </div>
);

export default StatItem;
