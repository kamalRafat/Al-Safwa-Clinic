import React, { memo } from "react";
import { Maximize2, Camera } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const Gallery = () => {
  const { t } = useLanguage();
  const galleryImages = t.gallery.images || [];
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    hidden: { opacity: 0, scale: 0.9, y: isMobile ? 10 : 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6">
          <motion.div
            animate={isMobile ? {} : { rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-primary"
          >
            <Camera size={32} aria-hidden="true" />
          </motion.div>
        </div>

        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={isMobile ? {} : { y: -10 }}
              className="group relative h-80 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border-4 border-white"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={400}
                height={320}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              {!isMobile && (
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="bg-white/90 backdrop-blur-md p-4 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <Maximize2
                      size={24}
                      className="text-primary"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Gallery);
