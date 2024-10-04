import { Category } from "../fakeData/fakeData";
import { Slider } from "../components/ecommerce/imgSlider/ImgSlider";
import { Information } from "../components/ecommerce/ecoInformation/information";
import { Categories } from "../components/ecommerce/Categories/Categories";
import { productData } from "../assets/productsImg/dataProduct";
import { useEffect } from "react";
import { addProducts } from "../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
import { Products } from "../components/ecommerce/products";

const DataImg = [
  {
    src: "../homeImgs/homeOne.jpg",
    alt: "ImageOne",
  },
  {
    src: "../homeImgs/homeTwo.jpg",
    alt: "ImageTwo",
  },
  {
    src: "../homeImgs/homeThree.jpg",
    alt: "ImageThree",
  },
];

const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.Products);

  useEffect(() => {
    dispatch(addProducts(productData));
  }, [dispatch]);

  return (
    <div className="md:container m-auto md:px-8 mt-4">
      <div className="flex gap-5 justify-center m-1">
        <div className=" w-80 p-3 bg-gray-100 h-fit hidden sm:block">
          <h2 className="bg-red-600 text-white font-semibold p-2 mb-3">
            SHOP BY CATEGORIES
          </h2>
          {Category.map((item, inx) => {
            return (
              <div key={inx} className="flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full border border-red-600"></span>
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div>
          <Slider data={DataImg} />
        </div>
      </div>
      <Information />
      <Categories />
      <div className="flex flex-col items-center">
        <div className="mt-8">
          <h1 className="font-bold text-3xl text-center mb-3">Top Products </h1>
          <div className="flex flex-wrap gap-4 justify-center  ">
            <Products data={products.slice(0, 5)} />
          </div>
          <div className="px-8 flex flex-wrap gap-4 justify-center">
            <h1 className="text-3xl font-bold my-4 mt-8 px-4 text-center">
              Shop
            </h1>
            <div className="flex flex-wrap gap-4 justify-center  ">
              <Products data={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
