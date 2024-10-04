import { CartBasket } from "../../ecommerce/CartBasket/CartBasket";
import { NavBar } from "../NavBar";
import { IoPerson } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import styles from "./styles.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchData } from "../../../redux/productSlice";

const { animation, item } = styles;

const Header = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handelForm = (e) => {
    e.preventDefault();
    dispatch(SearchData(search));
    navigate("/filtred-products");
  };

  return (
    <div className="shadow-md">
      <div className="flex items-center md:container mx-auto md:px-8 py-3 gap-3 px-1 ">
        <div>
          <h1 className="text-xl md:text-3xl font-semibold ">
            Ec
            <span className="text-white bg-red-600 rounded-sm ml-1 px-1">
              Shop
            </span>
          </h1>
        </div>

        <form
          className="flex items-center border flex-1 p-2 relative"
          onSubmit={(e) => handelForm(e)}
        >
          <input
            type="text"
            placeholder="Search for product.."
            className="w-10/12 outline-none"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <FaSearch
            className="text-red-600 absolute right-2 text-xl cursor-pointer"
            onClick={(e) => {
              handelForm(e);
            }}
          />
        </form>

        <div className="flex items-center gap-3 relative ">
          <CartBasket />
          <div className="hidden md:flex gap-3">
            <div
              className={animation}
              onClick={() => {
                navigate("/Login");
              }}
            >
              <button> Login </button>
              <span className={item}></span>
            </div>

            <div
              className={animation}
              onClick={() => {
                navigate("/Register");
              }}
            >
              <button> Register </button>
              <span className={item}></span>
            </div>
          </div>
          <div
            className="md:hidden block"
            onClick={() => {
              setShow(!show);
            }}
          >
            <IoPerson className="text-red-500 text-2xl cursor-pointer hover:scale-110 duration-300" />
          </div>
          <div
            className={
              show == true
                ? "w-40 h-24 font-semibold bg-gray-100 text-black absolute right-1 top-10 z-10 flex flex-col justify-evenly items-center rounded-sm shadow-sm"
                : "hidden"
            }
          >
            <p
              className="cursor-pointer hover:text-red-500 duration-300 hover:scale-110"
              onClick={() => {
                navigate("/Register");
              }}
            >
              Register
            </p>
            <span className="w-full bg-gray-300 h-999"></span>
            <p
              className="cursor-pointer hover:text-red-500 duration-300 hover:scale-110"
              onClick={() => {
                navigate("/Login");
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export { Header };
