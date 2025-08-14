import React, { useState, useEffect } from 'react';
import Layout from './Layout/Layout';
import { useRouter } from 'next/router';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      fetchProductDetail();
    }
  }, [id]);

  const fetchProductDetail = async () => {
    try {
      setLoading(true);
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error('Ürün detayları yüklenirken hata oluştu:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert(`${quantity} adet ${product.name} sepete eklendi!`);
      router.push('/cart');
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Ürün bulunamadı</h2>
            <p className="text-gray-600">Aradığınız ürün mevcut değil.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-6">
              <div className="relative">
                {product.image ? (
                  <img
                    src={`http://localhost:8001${product.image.startsWith('/') ? '' : '/'}${product.image}`}
                    alt={product.name}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-lg">Resim yok</span>
                  </div>
                )}
              </div>
            </div>

            <div className="lg:w-1/2 p-6 lg:p-8">
              <div className="space-y-6">
                {/* Ürün Adı */}
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  {product.category && (
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category.name}
                    </span>
                  )}
                </div>

                {/* Fiyat */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl font-bold text-red-600">
                      {product.price} TL
                    </span>
                    {product.oldPrice && product.oldPrice > product.price && (
                      <span className="text-xl text-gray-500 line-through">
                        {product.oldPrice} TL
                      </span>
                    )}
                  </div>
                </div>

                {/* Açıklama */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Ürün Açıklaması</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {product.description || 'Bu ürün için henüz açıklama eklenmemiştir.'}
                  </p>
                </div>

                {/* Miktar Seçimi */}
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Miktar</h3>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-xl font-bold text-gray-600">-</span>
                    </button>
                    <span className="text-xl font-semibold text-gray-900 min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-xl font-bold text-gray-600">+</span>
                    </button>
                  </div>
                </div>

                {/* Sepete Ekle Butonu */}
                <div className="border-t border-gray-200 pt-6">
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                    </svg>
                    <span>Sepete Ekle</span>
                  </button>
                </div>

                {/* Ek Bilgiler */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Hızlı Teslimat</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Güvenli Ödeme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;