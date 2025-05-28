import { Outlet } from "react-router-dom";
import NewNav from "../components/NewNav";

const Authlayout = () => {
  return (
    <>
      <NewNav />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Authlayout;
