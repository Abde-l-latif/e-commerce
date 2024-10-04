const CategoryData = [
  {
    Title: "Men",
    para: "View all",
    src: "../../../Category/CategoryOne.png",
  },
  {
    Title: "Kids",
    para: "View all",
    src: "../../../Category/CategoryTwo.png",
  },
  {
    Title: "Women",
    para: "View all",
    src: "../../../Category/CategoryThree.png",
  },
];

const Categories = () => {
  const renderCategory = CategoryData.map((x, index) => {
    return (
      <div key={index} className="xl:w-96 sm:w-72 w-72 px-1 relative">
        <img src={x.src} className="w-full rounded-lg" />
        <div className=" absolute top-1/2 left-5 -translate-y-1/2">
          <h2 className="font-bold text-lg"> {x.Title} </h2>
          <p className="font-light hover:text-red-500 hover:scale-110 hover:font-bold duration-300 cursor-pointer">
            {x.para}
          </p>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 ">
          {renderCategory}
        </div>
      </div>
    </>
  );
};

export { Categories };
