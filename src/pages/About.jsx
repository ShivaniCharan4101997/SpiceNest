import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about.webp"
            alt="About SpiceNest"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </motion.div>

        {/* Right Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl text-center font-bold font-[overpass] italic text-amber-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 leading-relaxed font-[overpass]">
            Being one of the leading manufacturers and suppliers of the
            impeccable range of spices, we,{" "}
            <span className="font-semibold">SpiceNest</span>, are known as the
            best place to buy spices among the market leaders. For reasons of
            making the finest products available to our clients, we engage in
            the utilisation of quality ingredients and modern machines, as per
            the FDA norms and guidelines. This ensures our products&apos;
            essence, fragrance and shelf life.
            <br />
            <br />
            Our range comprises the finest Chilli, Turmeric, Cumin Seeds,
            Coriander, etc. available in powder as well as whole form — widely
            praised in the market. We are among the few companies that use the
            best quality whole cooking spices and follow stringent quality
            control measures. Further, our products are offered at highly
            competitive prices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
