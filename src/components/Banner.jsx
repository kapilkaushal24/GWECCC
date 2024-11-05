import bannerImage from "../assets/banner.png";

const Banner = () => (
  <section
    className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
    style={{ backgroundImage: `url(${bannerImage})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

    <div className="relative z-10 text-center text-white px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide animate-fade-in-down">
        GWECCC 2025
      </h1>
      <p className="mt-6 text-lg md:text-xl lg:text-2xl animate-fade-in-up">
        Join us on March 15-17, 2025, in New York City
      </p>
      <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all rounded-lg font-semibold animate-fade-in-up">
        Register Now
      </button>
    </div>
  </section>
);

export default Banner;
