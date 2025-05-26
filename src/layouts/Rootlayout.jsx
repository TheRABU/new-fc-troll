import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewNav from "../components/NewNav";
import Footer from "../components/Footer";

const Rootlayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NewNav />
      <div
        className="h-full w-full"
        // style={{
        //   background: "radial-gradient(circle at top, #444af8 , #040e25)",
        // }}
      >
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Rootlayout;
