import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Sarah Johnson",
    feedback:
      "Absolutely love the quality! Fast delivery and excellent customer service. Highly recommend!",
    img: "/images/userIcon.png",
  },
  {
    name: "Michael Smith",
    feedback:
      "Amazing experience! The website is easy to navigate and the products are top-notch.",
    img: "/images/userIcon.png",
  },
  {
    name: "Emily Davis",
    feedback:
      "Great value for money. I’ll definitely be coming back for more purchases.",
    img: "/images/userIcon.png",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-600 italic mb-4">"{t.feedback}"</p>
                <h3 className="text-lg font-semibold text-gray-800">
                  {t.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
