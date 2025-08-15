const Hero = () => {
  return (
    <section>
      <div className="relative h-screen">
        {/* Background Image */}
        <img
          src="/images/img1.webp"
          alt="SpiceNest hero banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <h1 className="text-4xl md:text-7xl font-bold font-[Overpass] italic">
            Welcome to SpiceNest
          </h1>
          <p className="mt-3 text-lg md:text-xl font-[Overpass] italic">
            Your one-stop shop for quality spices
          </p>

          <a
            href="/shop"
            className="mt-6 px-6 py-3 bg-amber-600 hover:bg-amber-700 transition-colors rounded-lg text-white"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
