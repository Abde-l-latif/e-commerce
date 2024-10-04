import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaCarSide } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { addToCart } from "../redux/cartSlice";

const ShowProduct = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.Products.products);
  const findProduct = data.find((x) => x.id === parseInt(id));
  const dispatch = useDispatch();
  return (
    <>
      <div className="container px-8 mx-auto flex justify-center">
        <div className="grid grid-col-1 md:grid-cols-2 gap-5 mb-5">
          <div className="p-3 bg-white shadow-lg rounded-md mt-5 flex justify-center items-center w-fit ">
            <img src={findProduct.img} alt="img" />
          </div>
          <div className="p-3 pt-5 md:w-96 bg-white shadow-lg rounded-md gap-5 mt-5 flex flex-col items-center ">
            <h1 className=" font-bold text-2xl capitalize">
              {findProduct.title}
            </h1>
            <p className="text-gray-400 font-semibold">
              $ {findProduct.price.toFixed(2)}
            </p>
            <div>
              <button
                className="bg-red-600 text-white p-1 rounded-sm w-32 hover:tracking-wider duration-200"
                onClick={() => {
                  dispatch(addToCart(findProduct));
                }}
              >
                Add to Cart
              </button>
            </div>
            <div className="flex gap-2 items-center mt-5">
              <FaCarSide />
              <p> Delivery & Return </p>
            </div>
            <div className="flex gap-2 items-center ">
              <FaQuestion />
              <p> Ask a Question </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-8 mx-auto mt-3">
        <h1 className="text-2xl font-bold mb-2"> Product Description </h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ab
          dicta similique non magnam nulla perspiciatis alias ullam, repellendus
          corporis optio, minus quisquam? Quibusdam ratione voluptate, sequi
          architecto expedita numquam.
        </p>
      </div>
    </>
  );
};

export { ShowProduct };
