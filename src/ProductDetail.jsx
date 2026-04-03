import { useParams } from 'react-router-dom';
import Navbar from './NavBar';
import ProductPreview from "./ProductPreview";
import { Products } from "./Products"; // ✅ Correct import
import Footer from './Footer';

export default function ProductDetail() {
  const { id } = useParams();
  const product = Products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <Navbar />
      <ProductPreview product={product} /> {/* ✅ Pass the selected product */}
      <Footer />
    </div>
  );
}
