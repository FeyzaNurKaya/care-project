import React from 'react';
import Layout from '../components/Layout/Layout';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const router = useRouter();
  const { cartItems, updateQuantity, removeItem, getCartTotal } = useCart();

  const handleCheckout = () => {
    alert('Ödeme sayfasına yönlendiriliyorsunuz...');
  };

  const handleContinueShopping = () => {
    router.push('/');
  };

  if (cartItems.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="mb-6">
              <svg className="w-24 h-24 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
            <p className="text-gray-600 mb-6">Sepetinizde henüz ürün bulunmuyor.</p>
            <button
              onClick={handleContinueShopping}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Alışverişe Başla
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sepetim</h1>
          <p className="text-gray-600 mt-2">Sepetinizde {cartItems.length} ürün bulunuyor</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Ürün Listesi */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center p-6 border-b border-gray-200 last:border-b-0">
                  {/* Ürün Resmi */}
                  <div className="w-20 h-20 mr-4">
                    <img
                      src={`http://localhost:8001${item.image.startsWith('/') ? '' : '/'}${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Ürün Bilgileri */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-red-600 font-bold">{item.price} TL</p>
                  </div>

                  {/* Miktar Kontrolleri */}
                  <div className="flex items-center space-x-3 mr-6">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm font-bold text-gray-600">-</span>
                    </button>
                    <span className="text-lg font-semibold text-gray-900 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-sm font-bold text-gray-600">+</span>
                    </button>
                  </div>

                  {/* Toplam Fiyat */}
                  <div className="text-right mr-6">
                    <p className="text-lg font-bold text-gray-900">{(item.price * item.quantity).toFixed(2)} TL</p>
                  </div>

                  {/* Sil Butonu */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Sepet Özeti */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Sepet Özeti</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span className="font-semibold">{getCartTotal()} TL</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  <span className="font-semibold text-green-600">Ücretsiz</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Toplam</span>
                    <span className="text-lg font-bold text-red-600">{getCartTotal()} TL</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
              >
                Ödemeye Geç
              </button>

              <button
                onClick={handleContinueShopping}
                className="w-full border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Alışverişe Devam Et
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart; 