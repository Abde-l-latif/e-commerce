/* eslint-disable react/prop-types */

const Model = ({ children, setModel, model }) => {
  if (model === false) return null;
  return (
    <>
      <div className="absolute w-full h-full bg-black/20 bottom-0 top-0 left-0">
        <div
          className="text-black text-3xl font-bold right-4 absolute cursor-pointer hover:scale-110 duration-200"
          onClick={() => {
            setModel(false);
          }}
        >
          &times;
        </div>
        {children}
      </div>
    </>
  );
};

export { Model };
