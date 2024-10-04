import { MdAddShoppingCart } from "react-icons/md";
import Style from "./style.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const { container, icon } = Style;

const CartBasket = () => {
  const totalQuantity = useSelector((state) => state.Cart.totalQuantity);

  return (
    <>
      <Link to="/Cart">
        <div className={container}>
          <MdAddShoppingCart className={icon} />
          <div
            className={
              totalQuantity <= 0
                ? ""
                : "w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center absolute -right-2 -top-2"
            }
          >
            <p> {totalQuantity === 0 ? "" : totalQuantity} </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export { CartBasket };
