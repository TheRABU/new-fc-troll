import heroBG from "../../assets/messibg.jpg";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero w-full min-h-screen xl:h-[780px] bg-cover bg-center flex items-center justify-center relative -mt-16"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl text-white font-bold">Welcome to FCTroll</h1>
          <p className="text-white mt-2 text-lg">
            Experience the best football content.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
