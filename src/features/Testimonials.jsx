import React from "react";
import { Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import SectionHeading from "../components/common/SectionHeading";

const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: "أمل ر.",
      text: "أفضل تجربة أسنان مررت بها على الإطلاق! الدكتورة لطيفة جداً ومحترفة. العيادة نظيفة للغاية والموظفون رائعون.",
      stars: 5,
    },
    {
      name: "محمد ط.",
      text: "كنت مرعوباً من طبيب الأسنان، لكن برايت سمايل غيرت ذلك. علاج قناة الجذر بدون ألم ورعاية ممتازة بعد العلاج. أنصح به بشدة!",
      stars: 5,
    },
    {
      name: "سارة ل.",
      text: "خدمة رائعة ومواعيد مرنة. أحضرت أطفالي إلى هنا واستمتعوا بالفعل بالزيارة. فريق طب الأطفال رائع.",
      stars: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.testimonials.title}
          subtitle={t.testimonials.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{review.text}"</p>
              <div className="font-bold text-gray-900">{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
