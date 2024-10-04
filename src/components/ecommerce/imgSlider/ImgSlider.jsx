/* eslint-disable react/prop-types */
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="md:w-99 lg:w-100 relative bg-gray-200 m-1">
        {data.map((img, idx) => {
          return (
            <img
              src={img.src}
              alt={img.alt}
              key={idx}
              className={counter == idx ? "w-full object-cover h-96" : "hidden"}
            />
          );
        })}
        <FaChevronCircleRight
          className="absolute top-1/2 right-3 text-red-700 text-2xl cursor-pointer hover:scale-110 duration-300 active:text-white"
          onClick={() => {
            if (counter == data.length - 1) {
              setCounter(0);
            } else {
              setCounter(counter + 1);
            }
          }}
        />
        <FaChevronCircleLeft
          className="absolute top-1/2 left-3  text-red-700 text-2xl cursor-pointer hover:scale-110 duration-300 active:text-white"
          onClick={() => {
            if (counter == 0) {
              setCounter(data.length - 1);
            } else {
              setCounter(counter - 1);
            }
          }}
        />
        <div className="w-32 h-fit flex items-center justify-around absolute bottom-2 right-1/2 translate-x-1/2">
          {data.map((_, index) => {
            return (
              <span
                key={index}
                className={
                  index === counter
                    ? "w-5 h-3 bg-red-700 block rounded-full "
                    : "w-3 h-3 bg-red-700/60 block rounded-full "
                }
              ></span>
            );
          })}
        </div>
        <div className=" p-2 absolute top-1/2 left-10 -translate-y-1/2">
          <p className="text-gray-700 pb-2">Everything you need</p>
          <h1 className="text-xl md:text-3xl font-bold pb-2">
            Welcome to Ec Shop
          </h1>
          <h2 className="text-gray-700 pb-2"> Products with great offers</h2>
          <Link to="/Shop">
            <button className="bg-red-700 pb-2 text-white p-2 font-medium rounded-sm hover:scale-110 duration-300">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Slider };
