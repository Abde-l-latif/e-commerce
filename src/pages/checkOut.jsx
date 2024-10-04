import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getData } from "../redux/orderSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const Cart = useSelector((state) => state.Cart);
  const [billing, setBilling] = useState(false);
  const [Shipping, setShipping] = useState(false);
  const [Payment, setPayment] = useState(true);
  const [checked, setChecked] = useState("COD");
  const [Info, setInfo] = useState({
    city: "",
    address: "",
    zip: "",
    productInfo: Cart.products,
    totalPrice: Cart.totalPrice,
    orderNumber: "1111",
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="lg:container mx-auto my-8 lg:px-8 px-1 md:px-2">
        <h1 className="font-bold text-3xl mb-3"> CHECKOUT </h1>
        <div className="flex gap-8 smm:flex-col md:flex-row justify-center">
          <div className="flex-1">
            <div className="border p-3">
              <div
                className=" flex justify-between items-center"
                onClick={() => {
                  setBilling(!billing);
                }}
              >
                <p className="font-bold"> Billing Information </p>
                {billing == false ? (
                  <FaChevronUp className="cursor-pointer" />
                ) : (
                  <FaChevronDown className="cursor-pointer" />
                )}
              </div>
              {billing == true ? (
                <>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> Name </label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="border p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> Email </label>
                    <input
                      type="email"
                      placeholder="Enter Email"
                      className="border p-2 outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> Phone Number </label>
                    <input
                      type="tel"
                      placeholder="Enter Your Number"
                      className="border p-2 outline-none"
                    />
                  </div>{" "}
                </>
              ) : (
                ""
              )}
            </div>
            <div className="border p-3 mt-5">
              <div
                className=" flex justify-between items-center"
                onClick={() => {
                  setShipping(!Shipping);
                }}
              >
                <p className="font-bold"> Shipping Information </p>
                {Shipping == false ? (
                  <FaChevronUp className="cursor-pointer" />
                ) : (
                  <FaChevronDown className="cursor-pointer" />
                )}
              </div>
              {Shipping == true ? (
                <>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> Address </label>
                    <input
                      type="text"
                      placeholder="Enter Address"
                      className="border p-2 outline-none"
                      onChange={(e) => {
                        setInfo({ ...Info, address: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> City </label>
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="border p-2 outline-none"
                      onChange={(e) => {
                        setInfo({ ...Info, city: e.target.value });
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-2">
                    <label className="text-gray-500"> Zip Code </label>
                    <input
                      type="text"
                      placeholder="Enter Your Zip Code"
                      className="border p-2 outline-none"
                      onChange={(e) => {
                        setInfo({ ...Info, zip: e.target.value });
                      }}
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="border p-3 mt-5">
              <div
                className=" flex justify-between items-center"
                onClick={() => {
                  setPayment(!Payment);
                }}
              >
                <p className="font-bold"> Payment Method </p>
                {Payment == false ? (
                  <FaChevronUp className="cursor-pointer" />
                ) : (
                  <FaChevronDown className="cursor-pointer" />
                )}
              </div>
              {Payment == true ? (
                <>
                  <div className="mt-2">
                    <input
                      type="radio"
                      onChange={() => {
                        setChecked("COD");
                      }}
                      checked={checked == "COD"}
                    />
                    <label className="ml-1"> Cash on Delivery </label>
                  </div>
                  <div className="mt-2">
                    <input
                      type="radio"
                      onChange={() => {
                        setChecked("DC");
                      }}
                      checked={checked == "DC"}
                    />
                    <label className="ml-1"> Debit Card </label>
                    {checked == "DC" ? (
                      <div className="bg-gray-200 p-3 mt-3">
                        <h1 className="font-bold text-xl mb-3">
                          Debit Card Information
                        </h1>
                        <div className="flex flex-col gap-2 mb-3">
                          <label className="font-semibold"> Card Number </label>
                          <input
                            type="text"
                            placeholder="Enter Card Number"
                            className="outline-none border p-1"
                          />
                        </div>
                        <div className="flex flex-col gap-2 mb-3">
                          <label className="font-semibold">
                            Card Holmder Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Card holder name"
                            className="outline-none border p-1"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="font-semibold">Expiry Date</label>
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="outline-none border p-1 w-full"
                            />
                          </div>
                          <div>
                            <label className="font-semibold"> CVV </label>
                            <input
                              type="text"
                              placeholder="CVV"
                              className="outline-none border p-1 w-full"
                            />
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="border h-fit p-4 shadow-md w-72 lg:w-80">
            <h1 className="font-bold mb-2"> Order Summary </h1>
            {Cart.products.map((x, index) => {
              return (
                <div
                  key={index}
                  className="flex mb-2 gap-2 items-center relative"
                >
                  <img src={x.img} alt="img" className="w-16" />
                  <div>
                    <h2 className="font-bold">{x.title}</h2>
                    <p className="text-gray-500 text-sm">
                      ${x.price.toFixed(2)} x {x.quantity}
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm absolute right-0 top-0">
                    ${x.totalPrice.toFixed(2)}
                  </p>
                </div>
              );
            })}
            <div className="border-t flex pt-2 mb-2 justify-between">
              <h2 className="text-gray-500"> Total Price : </h2>
              <p className=" font-bold"> ${Cart.totalPrice.toFixed(2)} </p>
            </div>
            <button
              className="bg-red-600 w-full p-2 text-white hover:tracking-wider duration-200"
              onClick={() => {
                dispatch(getData(Info));
                navigate("/Order");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { CheckOut };
