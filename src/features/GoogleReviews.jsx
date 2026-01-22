import React, { memo } from "react";
import { Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const GoogleReviews = () => {
  const { t } = useLanguage();
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
        staggerChildren: isMobile ? 0 : 0.05,
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
    <section id="reviews" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="آراء المرضى"
          title={
            <div className="flex items-center gap-4 justify-center">
              <img
                src="https://www.vectorlogo.zone/logos/google/google-icon.svg"
                alt="Google"
                className="w-10 h-10"
                width={40}
                height={40}
                loading="lazy"
              />
              {t.googleReviews.title}
            </div>
          }
          subtitle={t.testimonials.subtitle}
        />

        {/* Overall Rating Card */}
        <div className="flex justify-center mb-16 px-4">
          <motion.div
            initial={
              isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-primary/5 border border-gray-100 flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full max-w-xl"
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                {t.googleReviews.rating}
              </div>
              <div className="flex text-yellow-400 mt-2 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
            {!isMobile && (
              <div className="hidden md:block h-20 w-px bg-gray-100" />
            )}
            <div className="text-center md:text-start">
              <div className="text-2xl md:text-3xl font-black text-gray-900">
                {t.googleReviews.totalReviews}
              </div>
              <div className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mt-1">
                {t.googleReviews.reviewsText}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "0px" : "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {t.googleReviews.items.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-50 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">
                    {review.name}
                  </h4>
                  <p className="text-gray-400 text-[10px] md:text-xs font-bold">
                    {review.date}
                  </p>
                </div>
              </div>

              <div className="flex text-yellow-400 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 font-medium leading-relaxed italic text-base md:text-lg">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(GoogleReviews);
