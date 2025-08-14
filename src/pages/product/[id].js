import { useRouter } from 'next/router';
import ProductDetail from '../../components/ProductDetail';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!router.isReady) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
      </div>
    );
  }

  return <ProductDetail />;
};

export default ProductDetailPage; 