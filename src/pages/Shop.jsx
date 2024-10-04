import { useSelector } from "react-redux";
import { Products } from "../components/ecommerce/products";

const Shop = () => {
  const { products } = useSelector((state) => state.Products);
  return (
    <div>
      <div className="px-8 flex flex-wrap gap-4 justify-start my-10 container mx-auto">
        <Products data={products} />
      </div>
    </div>
  );
};

export { Shop };
