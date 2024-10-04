/* eslint-disable react/prop-types */
import { useState } from "react";
const HandelAddress = ({ setModel, setAddress }) => {
  const [local, setLocal] = useState("");
  const agreeAddress = () => {
    setAddress(local);
    setModel(false);
  };
  return (
    <div className="w-72 md:w-96 h-fit bg-white flex flex-col p-5 rounded-md shadow-md gap-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <input
        type="text"
        placeholder="Change Address"
        className="p-1 px-2 outline-none border rounded-sm"
        value={local}
        onChange={(e) => {
          setLocal(e.target.value);
        }}
      />
      <div className="flex justify-between">
        <button
          className="bg-red-600 text-white p-1 rounded-sm hover:scale-110 duration-200"
          onClick={() => {
            setModel(false);
          }}
        >
          Cancel
        </button>
        <button
          className="bg-green-600  text-white p-1 rounded-sm hover:scale-110 duration-200"
          onClick={() => {
            agreeAddress();
          }}
        >
          Agree
        </button>
      </div>
    </div>
  );
};

export { HandelAddress };
