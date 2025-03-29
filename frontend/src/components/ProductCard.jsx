import { ShoppingCartIcon } from "@heroicons/react/outline";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 flex items-center rounded">
        <ShoppingCartIcon className="h-5 w-5 mr-2" /> Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
