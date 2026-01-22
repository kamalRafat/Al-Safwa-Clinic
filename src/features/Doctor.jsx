import React, { memo } from "react";
import { GraduationCap, Award, Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { motion } from "framer-motion";
import SectionHeading from "../components/common/SectionHeading";

const Doctor = () => {
  const { t } = useLanguage();

  return (
    <section id="doctors" className="py-20 md:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="نخبة من الأطباء"
          title={t.doctorsTitle}
          subtitle="نحن نفخر بوجود فريق طبي متخصص يجمع بين الخبرة الطويلة والتعامل الإنساني الراقي."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {t.doctors &&
            t.doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col md:flex-row overflow-hidden"
              >
                {/* Image Container */}
                <div className="md:w-[45%] relative h-[400px] md:h-auto overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <Star
                      size={16}
                      className="text-yellow-400 fill-yellow-400"
                    />
                    <span className="text-sm font-bold text-gray-900">
                      طبيب معتمد
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="md:w-[55%] p-8 md:p-12 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>

                  <span className="relative text-accent font-black tracking-widest uppercase text-xs mb-4 block">
                    {doctor.role}
                  </span>

                  <h3 className="relative text-3xl font-black text-gray-900 mb-6 group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>

                  <p className="relative text-gray-500 mb-8 leading-relaxed font-medium line-clamp-3">
                    {doctor.desc}
                  </p>

                  <div className="relative space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-colors duration-500">
                        <GraduationCap size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1 uppercase tracking-wider">
                          {doctor.specialtyLabel}
                        </h4>
                        <p className="text-gray-500 text-sm font-semibold">
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-colors duration-500">
                        <Award size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1 uppercase tracking-wider">
                          {doctor.experienceLabel}
                        </h4>
                        <p className="text-gray-500 text-sm font-semibold">
                          {doctor.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Doctor);
