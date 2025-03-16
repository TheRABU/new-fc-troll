import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <div
        className="h-full min-h-screen"
        style={{
          background: "radial-gradient(circle at top, #444af8 , #040e25)",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Rootlayout;
