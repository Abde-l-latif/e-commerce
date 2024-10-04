import { FaShippingFast } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaMoneyBillWave } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";
import { MdDiscount } from "react-icons/md";

const Information = () => {
  const dataInfo = [
    {
      icon: <FaShippingFast />,
      title: "Free Shipping",
      description: "Get your orders delivered with no extra cost",
    },
    {
      icon: <SlEarphonesAlt />,
      title: "Support 24/7",
      description: "We are here to assist you anytime",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "100% Money Back",
      description: "Full refund if you are not satisfied",
    },
    {
      icon: <GrSecure />,
      title: "Payment Secure",
      description: "Your payment information is safe with us",
    },
    {
      icon: <MdDiscount />,
      title: "Discount",
      description: "Enjoy the best prices on our products",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-5 mt-10 ">
        {dataInfo.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center w-56 text-center h-40 justify-evenly shadow-lg hover:scale-105 duration-300"
            >
              <div className="text-red-500 text-3xl">{item.icon}</div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-gray-600"> {item.description} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Information };
