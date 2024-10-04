import { useDispatch, useSelector } from "react-redux";
import { FaTrashRestore } from "react-icons/fa";
import { useState } from "react";
import Lottie from "lottie-react";
import empty from "../assets/lotties/Animation - 1725113242677.json";
import { Model } from "./modal";
import { HandelAddress } from "./handelAddress";
import {
  deCreaseQuantity,
  inCreaseQuantity,
  removeFromCart,
} from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Cart = useSelector((state) => state.Cart);
  const [address, setAddress] = useState("street G6 f24");
  const [model, setModel] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {Cart.products.length <= 0 ? (
        <>
          <h1 className="container mx-auto px-8 my-3 font-bold text-3xl mb-3">
            Shopping Cart
          </h1>
          <div className="w-full flex justify-center ">
            <Lottie className="w-96" animationData={empty} />
          </div>
        </>
      ) : (
        <div className="lg:container mx-auto my-8 lg:px-8 px-1 md:px-2">
          <h1 className="font-bold text-3xl mb-3"> Shopping Cart </h1>
          <div className="flex gap-8 smm:flex-col md:flex-row justify-center">
            <div className="flex-1">
              <div className="flex justify-between smm:text-sm font-semibold sm2:text-base border-b-2 p-2 ">
                <h2> Product </h2>
                <div className="flex gap-2 sm2:gap-5">
                  <p> Price </p>
                  <p> Quantity </p>
                  <p> SubTotal </p>
                  <p> Remove </p>
                </div>
              </div>
              <div>
                {Cart.products.map((x, index) => {
                  return (
                    <div
                      key={index}
                      className="flex justify-between border-b p-1"
                    >
                      <div className="flex smm:flex-col sm2:flex-row gap-2 items-center">
                        <img src={x.img} alt="Img" className="w-16 sm2:w-20" />
                        <h1 className="capitalize smm:text-sm sm2:text-lg font-medium">
                          {x.title}
                        </h1>
                      </div>
                      <div className="flex gap-1 sm2:gap-3 lg:gap-7 items-center">
                        <p className="text-sm sm2:text-base">
                          ${x.price.toFixed(2)}{" "}
                        </p>
                        <div className="flex smm:w-16 sm2:w-20 justify-evenly border items-center">
                          <button
                            className="hover:text-red-600 text-lg duration-200 w-3"
                            onClick={() => {
                              dispatch(deCreaseQuantity(x.id));
                            }}
                          >
                            -
                          </button>
                          <p className="border-x sm2:px-2 px-1 font-semibold">
                            {x.quantity}
                          </p>
                          <button
                            className="hover:text-red-600 text-lg duration-200"
                            onClick={() => {
                              dispatch(inCreaseQuantity(x.id));
                            }}
                          >
                            +
                          </button>
                        </div>
                        <p className="text-sm sm2:text-base">
                          ${x.totalPrice.toFixed(2)}
                        </p>
                        <button
                          onClick={() => {
                            dispatch(removeFromCart(x.id));
                          }}
                        >
                          <FaTrashRestore className="text-red-600 hover:scale-110 duration-200" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="border h-fit p-4 shadow-md w-72 lg:w-80">
              <h2> Cart Totals</h2>
              <div className=" flex justify-between py-4 border-b">
                <p> TOTAL ITEMS :</p>
                <p className="font-semibold"> {Cart.totalQuantity} </p>
              </div>
              <div className="py-3 border-b">
                <h3> Shipping : </h3>
                <p>
                  shipping to{" "}
                  <span className="font-bold text-xs"> {address} </span>
                </p>
                <button
                  className="text-right text-blue-500 "
                  onClick={() => {
                    setModel(true);
                  }}
                >
                  Change Address
                </button>
              </div>
              <div className="py-3 flex justify-between">
                <p> Total Price : </p>
                <p className="font-semibold"> ${Cart.totalPrice.toFixed(2)} </p>
              </div>
              <button
                className="bg-red-600 w-full p-2 text-white hover:tracking-wider duration-200"
                onClick={() => {
                  navigate("/Checkout");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Model model={model} setModel={setModel}>
            <HandelAddress setModel={setModel} setAddress={setAddress} />
          </Model>
        </div>
      )}
    </>
  );
};

export { Cart };
