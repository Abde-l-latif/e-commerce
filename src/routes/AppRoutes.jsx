import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Cart } from "../pages/Cart";
import { CheckOut } from "../pages/checkOut";
import { Order } from "../pages/Order";
import { LogIn } from "../components/common/Login";
import { Register } from "../components/common/Register";
import { FiltredProducts } from "../pages/filtredProducts";
import { ShowProduct } from "../pages/showProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
      {
        path: "/Checkout",
        element: <CheckOut />,
      },
      {
        path: "/Order",
        element: <Order />,
      },
      {
        path: "/Login",
        element: <LogIn />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/filtred-products",
        element: <FiltredProducts />,
      },
      {
        path: "/Product/:id",
        element: <ShowProduct />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <MainLayout />
      </RouterProvider>
    </Provider>
  );
};

export { AppRoutes };
