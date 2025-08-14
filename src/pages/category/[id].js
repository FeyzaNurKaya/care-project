import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchProductsByCategories } from '../../services/api'
import Image from 'next/image'
import Layout from '@/components/Layout/Layout'
import { useCart } from '../../context/CartContext'

const CategoryPage = () => {
  const router = useRouter()
  const { id } = router.query
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    if (!id) return
    console.log('Category ID:', id)
    setLoading(true)
    fetchProductsByCategories(id)
      .then((data) => {
        console.log('API Response:', data)
        setProducts(data)
      })
      .catch((error) => {
        console.error('API Error:', error)
        setProducts([])
      })
      .finally(() => {
        console.log('Loading finished')
        setLoading(false)
      })
  }, [id])

  const getCategoryName = (categoryId) => {
    const categories = {
      1: 'CİLT BAKIMI',
      2: 'GÜNEŞ',
      3: 'SETLER'
    }
    return categories[categoryId] || 'Kategori'
  }

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Ürün detayına gitmeyi engelle
    addToCart(product, 1);
    alert(`${product.name} sepete eklendi!`);
    router.push('/cart');
  };

  return (
    <Layout>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-2xl font-bold text-black mb-10'>{getCategoryName(id)}</h1>
      {!loading && products.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {products.map((product) => (
            <div 
              key={product.id} 
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'
              onClick={() => handleProductClick(product.id)}
            >
              <div className='relative w-full h-48'>
                <Image 
                  src={`/images/${product.image}`} 
                  alt={product.name} 
                  fill 
                  style={{objectFit:'cover'}} 
                  className='rounded-t-lg'
                />
              </div>
              <div className='p-4'>
                <h3 className='font-bold text-lg mb-2 text-gray-800'>{product.name}</h3>
                <p className='text-gray-600 mb-2'>{product.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-xl font-bold text-pricered'>{product.price} TL</span>
                  <button 
                    className='bg-pricered text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors'
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!loading && products.length === 0 && (
        <div className='flex justify-center items-center py-20'>
          <div className='text-center'>
            <div className='text-lg text-gray-600 mb-2'>Bu kategoride ürün bulunamadı.</div>
            <button 
              onClick={() => router.back()}
              className='text-pricered hover:text-blue-800'
            >
              Geri Dön
            </button>
          </div>
        </div>
      )}
    </div>
    </Layout>
)
}

export default CategoryPage 

