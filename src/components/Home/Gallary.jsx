import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryImg = [
    {
      id: 1,
      img: "/images/gallary1.jpg",
      title: "Spice Mix",
      category: "Premium",
      desc: "Aromatic blends for every dish.",
    },
    {
      id: 2,
      img: "/images/gallary2.jpg",
      title: "Golden Turmeric",
      category: "Organic",
      desc: "Pure and rich in color.",
    },
    {
      id: 3,
      img: "/images/gallary3.jpg",
      title: "Chilli Powder",
      category: "Hot",
      desc: "Fiery taste for spicy lovers.",
    },
  ];

  return (
    <section className="text-gray-600 body-font py-16 bg-amber-50">
      <div className="container px-5 mx-auto">
        <h2 className="text-4xl text-center font-bold font-[overpass] italic text-amber-800 mb-8">
          Gallery
        </h2>

        <div className="flex flex-wrap -m-4">
          {galleryImg.map((item, index) => (
            <motion.div
              key={item.id}
              className="p-4 md:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  className="lg:h-52 md:h-36 w-full object-cover object-center"
                  src={item.img}
                  alt={item.title}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-amber-500 mb-1">
                    {item.category}
                  </h2>
                  <h1 className="title-font text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h1>
                  <p className="leading-relaxed mb-3">{item.desc}</p>
                  <Link
                    to="/shop"
                    className="text-indigo-500 inline-flex items-center hover:underline"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
