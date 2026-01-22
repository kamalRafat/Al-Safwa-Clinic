import React from "react";
import { ArrowRight, CheckCircle2, Award, Users, Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import StatItem from "../components/common/StatItem";
import heroImg from "../assets/image2.png";
import CallButton from "../components/common/CallButton";

const Hero = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Content Column */}
          <div className="lg:w-1/2 text-center lg:text-start space-y-8">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-bold"
            >
              <CheckCircle2 size={18} aria-hidden="true" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1]"
            >
              <span className="block">{t.hero.title}</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t.hero.titleAccent}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4"
            >
              <a
                href="#appointment"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-2xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden"
                aria-label={t.hero.book}
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  aria-hidden="true"
                ></div>
                {t.hero.book}
                <ArrowRight
                  size={20}
                  className="rtl:rotate-180"
                  aria-hidden="true"
                />
              </a>
              <CallButton variant="secondary" ariaLabel={t.hero.call}>
                {t.hero.call}
              </CallButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-100"
              aria-label="إحصائيات العيادة"
            >
              <StatItem
                icon={<Users className="text-primary" aria-hidden="true" />}
                label="مريض سعيد"
                value="1500+"
              />
              <StatItem
                icon={<Award className="text-accent" aria-hidden="true" />}
                label="سنوات خبرة"
                value="15+"
              />
              <StatItem
                icon={
                  <CheckCircle2 className="text-blue-500" aria-hidden="true" />
                }
                label="خدمة طبية"
                value="100%"
              />
            </motion.div>
          </div>

          {/* Image Column */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200/50">
              <img
                src={heroImg}
                alt="عيادة الصفوة الطبية"
                fetchPriority="high"
                loading="eager"
                decoding="sync"
                width={800}
                height={600}
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                aria-hidden="true"
              ></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 z-20 hidden md:block"
              aria-hidden="true"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                  <Award size={24} />
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {t.hero.techTitle}
                  </div>
                  <div className="text-xs text-gray-500">{t.hero.techDesc}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -top-6 -right-6 bg-white/95 p-6 rounded-2xl shadow-xl border border-white/20 z-20 hidden md:block"
              aria-hidden="true"
            >
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <div className="font-bold text-gray-900">{t.hero.ratingText}</div>
              <div className="text-xs text-gray-500">{t.hero.reviewsCount}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
