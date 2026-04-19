import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function TwoColumns({children}) {
  return (
    <div className="bg-[#EBF3FE]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
