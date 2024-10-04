import { Outlet } from "react-router-dom";
import { Header } from "../components/common/Header/Header";
import { Footer } from "../components/common/footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export { MainLayout };
