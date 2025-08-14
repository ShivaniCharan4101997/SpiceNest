import React from "react";
import Hero from "../components/Home/Hero";
import Categories from "../components/Home/Categories";
import Gallary from "../components/Home/Gallary";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <section>
      {/* hero section */}
      <Hero />
      <Categories />
      <Gallary />
      <Testimonial />
    </section>
  );
};

export default Home;
