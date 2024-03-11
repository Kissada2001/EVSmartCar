import Car from "../../assets/Car2.png";
import { BiPlayCircle } from "react-icons/bi";

const Hero = () => {
  return (
    <>
      <div className="px-10 py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-8 lg:pr-0 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                GET READY FOR {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    EV SMART CAR {" "}<br />
                </span>
                WITH OUR PRODUCT.
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                molestias quia exercitationem ex inventore labore beatae cumque
                et quaerat voluptas?
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="primary-btn"
                >
                  Get Started
                </button>
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="flex items-center gap-2"
                >
                  {" "}
                  <BiPlayCircle className="text-3xl" />
                  See Demo
                </button>
              </div>
            </div>
            {/* image section */}
            <div
              data-aos="fade-left"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={Car} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
