import { useNavigate } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const LogIn = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full items-center flex flex-col mt-8">
      <div className="w-72 md:w-99 mt-4  p-3 shadow-md border">
        <h1 className="font-bold text-xl self-start mb-3"> Login </h1>
        <div>
          <h2 className="text-gray-500"> Email </h2>
          <input
            type="email"
            placeholder="Enter Email"
            className="border p-2 w-full mt-1 mb-3"
          />
        </div>
        <div>
          <h2 className="text-gray-500"> Password </h2>
          <input
            type="password"
            placeholder="Enter Password"
            className="border p-2 w-full mt-1 mb-3"
          />
        </div>
        <div className="flex justify-between mb-2">
          <div>
            <input type="checkbox" />
            <label className="text-gray-600"> Remember me</label>
          </div>
          <a href="/" className="text-red-600">
            Forgot password ?
          </a>
        </div>
        <button className=" bg-red-600 mb-3 text-white w-full p-2 rounded-sm hover:tracking-wider duration-200">
          Login
        </button>
        <p className="text-center">
          Don't have an account ?
          <span
            onClick={() => {
              navigate("/Register");
            }}
            className="text-red-700 ml-1 cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export { LogIn };
