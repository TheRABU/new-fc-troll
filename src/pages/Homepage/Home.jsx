import heroBG from "../../assets/messibg.jpg";
import ronaldoBG from "../../assets/cr7madrid.jpg";
import neymarBG from "../../assets/neymar2.png";
import BentoGrid from "../../components/BentoGrid";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageCard from "../../components/ImageCard";

const Home = () => {
  const [newsStats, setNewsStats] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchNewsData = async () => {
  //     const options = {
  //       method: "GET",
  //       url: "https://free-api-live-football-data.p.rapidapi.com/football-players-search",
  //       params: { search: "m" },
  //       headers: {
  //         "x-rapidapi-key":
  //           "87486e42a8msh7f5f144d2f449bfp1cce3ejsnc657cde5da3e",
  //         "x-rapidapi-host": "free-api-live-football-data.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await axios.request(options);
  //       // console.log(response.data);
  //       // setNewsStats(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("API call failed: bhai ki hoise", error);
  //       if (error.response) {
  //         console.error("Status:", error.response.status);
  //         console.error("Data:", error.response.data);
  //       }
  //     }
  //   };

  //   fetchNewsData();
  // }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero w-full min-h-screen bg-cover bg-center bg-fixed relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBG})`,
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div> */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl drop-shadow-lg">
              TrollFC A.I powered football memes
            </h1>
            <p className="mx-auto mb-5 max-w-[528px] text-xl text-white lg:mb-8 drop-shadow-md">
              A simple platform for fun loving football fans creating exciting
              A.I powered images.
            </p>

            <Link
              to={"/generate-image"}
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group z-10"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                Get Started
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </Link>
          </div>
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
        <div className="relative my-12 flex w-full flex-col items-center sm:mt-24">
          <h1 className="mt-8 max-w-sm bg-gradient-to-br from-gray-500 via-teal-500 to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
            Football is More than just a Game
          </h1>
          <span className="mt-8 max-w-lg text-center text-xl leading-relaxed text-gray-100">
            Discover the latest features and enhancements of TrollFC football.
            Stay with us like football fans with their team.
          </span>
        </div>
      </section>
      <ImageCard />
    </>
  );
};

export default Home;
