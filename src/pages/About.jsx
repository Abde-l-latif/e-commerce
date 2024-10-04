import imgabout from "/aboutImg/about.jpg";

const About = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-8 mx-auto px-8 mt-5">
        <div className="bg-white shadow-md h-fit p-4">
          <h1 className="text-xl font-bold"> About Us </h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            alias, deserunt vel voluptatem delectus corporis enim quasi iste
            quas odio, tempora quia laudantium? Nemo, corporis maiores fugit
            architecto quia consequuntur?
          </p>
          <h2 className="text-xl font-bold mt-4">
            what you will earn from Ec-shop
          </h2>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae eaque
            consequuntur adipisci, eius porro ducimus repudiandae ab numquam
            placeat esse corporis repellendus. Assumenda laudantium minima, quod
            facere quo aliquid incidunt!
          </p>
          <button className="mt-5 bg-red-600 text-white p-1 w-36 rounded-md hover:tracking-wider duration-200">
            Learn more
          </button>
        </div>
        <div className="bg-white shadow-md h-fit p-4">
          <img src={imgabout} alt="img" />
        </div>
      </div>
    </>
  );
};

export { About };
