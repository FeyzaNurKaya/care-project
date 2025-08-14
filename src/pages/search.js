import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout/Layout';
import { getProducts } from '../services/api';
import Head from 'next/head';

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query;
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAndSearch = async () => {
      if (!q) return;
      
      setLoading(true);
      try {
        // Get all products and filter locally
        const products = await getProducts();
        setAllProducts(products);
        
        // Filter products based on search query
        const filtered = products.filter(product => 
          product.name.toLowerCase().includes(q.toLowerCase()) ||
          (product.description && product.description.toLowerCase().includes(q.toLowerCase()))
        );
        setFilteredProducts(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setFilteredProducts([]);
        setLoading(false);
      }
    };

    fetchAndSearch();
  }, [q]);

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto flex justify-center items-center min-h-screen">
          <div className="text-xl">Yükleniyor...</div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>Arama Sonuçları - Serra Care</title>
      </Head>
      <Layout>
        <div className="container mx-auto bg-white p-4 mt-12">
          <div className="flex justify-center mb-8">
            <div className="rounded-lg shadow border border-black text-pricered bg-white px-6 py-2 text-base font-semibold">
              Arama Sonuçları: "{q}"
            </div>
          </div>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-2xl font-semibold text-gray-600 mb-4">
                Aradığınız ürün bulunamadı
              </div>
              <div className="text-gray-500 mb-6">
                "{q}" için sonuç bulunamadı. Farklı anahtar kelimeler deneyebilirsiniz.
              </div>
              <button 
                onClick={() => router.push('/')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Ana Sayfaya Dön
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center border shadow-md rounded-md p-4 min-h-[500px] bg-gray-50 gap-6 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                  onClick={() => handleProductClick(product.id)}
                >
                  {product.image && (
                    <img
                      src={`http://localhost:8001${product.image.startsWith('/') ? '' : '/'}${product.image}`}
                      alt={product.name}
                      className="w-72 h-72 object-cover mb-4 rounded"
                    />
                  )}
                  <h3 className="font-bold mb-2 text-xl text-center">{product.name}</h3>
                  <p className="text-pricered font-semibold text-lg">{product.price} TL</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default SearchPage; 