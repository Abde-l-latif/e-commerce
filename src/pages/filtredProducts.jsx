/* eslint-disable react/no-unescaped-entities */
import { Products } from "../components/ecommerce/products";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import empty from "../assets/lotties/Animation - 1725113242677.json";

const FiltredProducts = () => {
  const data = useSelector((state) => state.Products.filtredData);
  return (
    <>
      {data.length > 0 ? (
        <div>
          <div className="px-8 flex flex-wrap gap-4 justify-start my-10 container mx-auto">
            <Products data={data} />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full flex justify-center ">
            <Lottie className="w-96" animationData={empty} />
          </div>
          <h1 className="text-center text-red-600 capitalize font-bold">
            we don't have products with this name !
          </h1>
        </>
      )}
    </>
  );
};

export { FiltredProducts };
