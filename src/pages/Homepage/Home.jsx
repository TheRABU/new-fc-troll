import heroBG from "../../assets/messibg.jpg";
import BentoGrid from "../../components/BentoGrid";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero w-full min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBG})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
              TrollFC get some fun football contents.
            </h1>
            <p className="mx-auto mb-5 max-w-[528px] text-xl text-white lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>

            <a
              href="#_"
              class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Get Started
              </span>
              <span class="absolute inset-0 border-2 border-white rounded-full"></span>
            </a>
          </div>

          {/* <div className="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
            <div className="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <div className="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <div className="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <div className="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
                alt=""
                className="inline-block"
              />
            </div>
            <div className="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
                alt=""
                className="inline-block"
              />
            </div>
          </div> */}
        </div>
      </section>
      <BentoGrid />
    </>
  );
};

export default Home;
