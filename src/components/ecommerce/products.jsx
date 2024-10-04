/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const dispatch = useDispatch();

  const handelCart = (event, x) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addToCart(x));
  };
  return (
    <>
      {data.map((x) => {
        return (
          <Link to={`/Product/${x.id}`} key={x.id}>
            <div className="border w-56 flex flex-col justify-center items-start p-2 hover:scale-105 duration-300 cursor-pointer">
              <img src={x.img} alt="img" className="w-52 " />
              <p className="capitalize text-lg font-semibold">{x.title}</p>
              <p className="text-gray-400"> $ {x.price} </p>
              <div className="flex items-center justify-between w-full">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div
                  className="group"
                  onClick={(event) => {
                    handelCart(event, x);
                  }}
                >
                  <button className="group-hover:hidden w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                    <p> + </p>
                  </button>
                  <button className="group-hover:block hidden text-white bg-red-600 py-1 px-2 rounded-2xl active:bg-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export { Products };
