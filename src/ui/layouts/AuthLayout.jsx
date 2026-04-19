import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function TwoColumns({children}) {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col overflow-hidden m-4 md:flex-row rounded-[12px]">
        <div className="hidden md:block bg-[url(/auth-image.png)] bg-cover  w-[50vw]"></div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
