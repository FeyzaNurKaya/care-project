import React from 'react'
import SearchBar from '../SearchBar'
import 'remixicon/fonts/remixicon.css'
import { useRouter } from 'next/router'
import { useCart } from '../../context/CartContext'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className="container mx-auto bg-white flex items-center justify-between h-20">
        <div className="flex-shrink-0 flex flex-col items-center">
          <Link href="/">
            LOGO
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="flex items-center space-x-6">
          <div className="relative group cursor-pointer">
            <i className="ri-truck-line text-2xl text-green-900"></i>
            <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white shadow-lg rounded-md">
              <span className="whitespace-nowrap text-sm">SİPARİŞ TAKİBİ</span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <i className="ri-map-pin-line text-2xl text-green-900"></i>
            <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white shadow-lg rounded-md">
              <span className="whitespace-nowrap text-sm">Mağazalar</span>
            </div>
          </div>
          <div className="relative group cursor-pointer" onClick={() => router.push('/loginpage')}>
            <i className="ri-user-line text-2xl text-green-900"></i>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-pink-700 rounded-full border-2 border-white"></span>
            <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white shadow-lg rounded-md">
              <span className="whitespace-nowrap text-sm">GİRİŞ YAP / ÜYE OL</span>
            </div>
          </div>
          <div className="relative group cursor-pointer" onClick={() => router.push('/cart')}>
            <i className="ri-shopping-bag-line text-2xl text-green-900"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full border-2 border-white flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
            <div className="absolute hidden group-hover:block top-full left-1/2 -translate-x-1/2 mt-2 p-2 bg-white shadow-lg rounded-md">
              <span className="whitespace-nowrap text-sm">Sepetim</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header