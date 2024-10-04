import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const data = useSelector((state) => state.Order.data);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-8">
      <h1 className="font-bold text-xl mb-3"> Thank you for your order! </h1>
      <p className="font-semibold text-gray-600 mb-3">
        your order has been placed successfully. you will receive an email
        confirmation shortly.
      </p>
      <div className="bg-gray-200 p-3 rounded-sm">
        <div className="mb-2">
          <h2 className="font-semibold text-lg"> Order Summary </h2>
          <p className="text-gray-600"> Order Number : {data.orderNumber} </p>
        </div>
        <div className="mb-2">
          <h2 className="font-semibold text-lg"> Shipping Information </h2>
          <p className="text-gray-600"> {data.address} </p>
          <p className="text-gray-600">
            {data.city}, {data.zip}
          </p>
        </div>
        <h2 className="font-semibold text-lg"> Items Ordered </h2>
        {data.productInfo.map((x, index) => {
          return (
            <div key={index} className="text-gray-600 flex justify-between">
              <p>
                {x.title} (x{x.quantity})
              </p>
              <p> ${x.price} </p>
            </div>
          );
        })}
        <div className="mt-2 flex justify-between">
          <p className="font-semibold text-lg"> Total Price : </p>
          <p className="text-gray-600 font-bold"> ${data.totalPrice} </p>
        </div>
      </div>
      <div className="flex gap-4 text-white mt-3">
        <button className="bg-green-400 p-2 w-36 rounded-sm hover:tracking-wider duration-200">
          Track Order
        </button>
        <button
          className="bg-red-700 p-2 w-48 rounded-sm hover:tracking-wider duration-200"
          onClick={() => {
            navigate("/");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export { Order };
