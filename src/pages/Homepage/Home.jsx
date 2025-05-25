import heroBG from "../../assets/messibg.jpg";
import ronaldoBG from "../../assets/cr7madrid.jpg";
import neymarBG from "../../assets/neymar2.png";
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
        {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
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

      <section
        className="hero w-full min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${ronaldoBG})`,
        }}
      >
        {/* <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
              For fans all over the World
            </h1>
            <p className="mx-auto mb-5 max-w-[528px] text-xl text-white lg:mb-8">
              A simple platform to generate football memes and trolls
            </p>
          </div>
        </div> */}
        <div class="relative my-12 flex w-full flex-col items-center sm:mt-24">
          {/* <a
            target="_blank"
            rel="noreferrer"
            href="https://example.com"
            class="mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-all hover:bg-blue-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 248 204"
              class="h-5 w-5 text-[#1d9bf0]"
            >
              <path
                fill="currentColor"
                d="M221.95 51.29c.15 2.17.15 4.34.15 6.53 0 66.73-50.8 143.69-143.69 143.69v-.04c-27.44.04-54.31-7.82-77.41-22.64 3.99.48 8 .72 12.02.73 22.74.02 44.83-7.61 62.72-21.66-21.61-.41-40.56-14.5-47.18-35.07 7.57 1.46 15.37 1.16 22.8-.87-23.56-4.76-40.51-25.46-40.51-49.5v-.64c7.02 3.91 14.88 6.08 22.92 6.32C11.58 63.31 4.74 33.79 18.14 10.71c25.64 31.55 63.47 50.73 104.08 52.76-4.07-17.54 1.49-35.92 14.61-48.25 20.34-19.12 52.33-18.14 71.45 2.19 11.31-2.23 22.15-6.38 32.07-12.26-3.77 11.69-11.66 21.62-22.2 27.93 10.01-1.18 19.79-3.86 29-7.95-6.78 10.16-15.32 19.01-25.20 26.16z"
              ></path>
            </svg>
            <p class="text-sm font-semibold text-[#1d9bf0]">
              Get beta features
            </p>
          </a> */}
          <h1 class="mt-8 max-w-sm bg-gradient-to-br from-gray-500 via-teal-500 to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
            Football is More than just a Game
          </h1>
          <span class="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-100">
            Discover the latest features and enhancements of TrollFC football.
            Stay with us like football fans with their team.
          </span>
          {/* <p class="mt-3 rounded border px-3 py-1 shadow">
            🎁 <span class="text-accent font-semibold">$50 off</span> for the
            first 1,000 customers!
          </p> */}
          <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
            <a
              href="https://example.com/new-feature"
              class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-teal-500"
            >
              <svg
                class="h-[30px] text-white"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                stroke-width="3"
                stroke="#000000"
                fill="none"
              >
                <path d="M14,39.87,24.59,50.51s33-14,31.23-42.29C55.82,8.22,29.64,4.28,14,39.87Z"></path>
                <path d="M44.69,9.09a12.3,12.3,0,0,0,3.48,6.73,12.31,12.31,0,0,0,7,3.52"></path>
                <circle cx="39.46" cy="24.56" r="6.2"></circle>
                <path d="M14.89,37.82l-5.3.68a.27.27,0,0,1-.28-.37l3.93-9a2.65,2.65,0,0,1,1.88-1.53l6.59-1.38"></path>
                <path d="M26.55,49.4l-.69,5.3a.27.27,0,0,0,.37.28l9-3.92a2.69,2.69,0,0,0,1.53-1.89l1.38-6.59"></path>
                <path d="M22.21,48.13c-2.37,7.41-14.1,7.78-14.1,7.78S8,44.51,15.76,41.67"></path>
              </svg>
              Get the Latest Update
            </a>
            <a
              href="#demo"
              class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-teal-500 px-10 py-3 text-teal-500"
            >
              Learn More →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
