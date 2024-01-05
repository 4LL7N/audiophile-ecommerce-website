import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { createContext, useState } from "react";
import data from "../data.json";
import Layout from "./Component/Layout";
import Home from "./Component/Home";
import Checkout from "./Component/Checkout";
import Category from "./Component/Category";
import Product from "./Component/Product";
import ScrollToTop from "./Component/ScrollToTop";

const AppLayout = () => (
  <>
    <ScrollToTop />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/:page",
            element: <Category />,
          },
          {
            path: "/:page/:product",
            element: <Product />,
          },
          {
            path: "/checkout",
            element: <Checkout />,
          },
        ],
      },
    ],
  },
]);

export const AudiophileEcommerceWebsite = createContext<any>(null);

interface Cart {
  image: string;
  name: string;
  price: number;
  quantity: number;
}

function App() {
  const [Pages, setPage] = useState<any>();
  const [cart, setCart] = useState<Cart[] | []>([]);
  const [total, setTotal] = useState<boolean>(false);
  const [sum, setSum] = useState<number>(0);
  const [checkout, setCheckout] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [Menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <AudiophileEcommerceWebsite.Provider
        value={{
          data,
          setPage,
          Pages,
          cart,
          setCart,
          total,
          setTotal,
          sum,
          setSum,
          checkout,
          setCheckout,
          order,
          setOrder,
          Menu,
          setMenu,
        }}
      >
          <RouterProvider router={router} />
      </AudiophileEcommerceWebsite.Provider>
    </>
  );
}

export default App;
