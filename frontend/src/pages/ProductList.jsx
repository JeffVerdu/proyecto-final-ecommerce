import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const { data: products, loading } = useFetch("https://fakestoreapi.com/products");

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
