import React from "react";
import { motion } from "motion/react";

const categories = [
  { id: 1, name: "Black Cardamom", img: "/images/blackCardomom.jpg" },
  { id: 2, name: "Black Pepper", img: "/images/blackPeppercorn.jpg" },
  { id: 3, name: "Clove", img: "/images/clove.jpg" },
  { id: 4, name: "Green Cardamom", img: "/images/greenCardomom.jpg" },
  { id: 5, name: "Turmeric Powder", img: "/images/turmericPowder.jpg" },
  { id: 6, name: "Cinnamon", img: "/images/cinnamon.jpg" },
  { id: 7, name: "Red Chilli", img: "/images/redChilli.jpg" },
  { id: 8, name: "Saffron", img: "/images/saffron.jpg" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Categories = () => {
  return (
    <section className="py-10 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl text-center font-bold font-[overpass] italic text-amber-800 mb-8">
          Categories
        </h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-amber-200 rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold font-[overpass]">
                  {cat.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
