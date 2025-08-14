import React, { useState, useEffect, useRef } from 'react'
import { getProducts } from '../services/api'

const SearchBar = ({ onSearch }) => {

  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const searchRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setAllProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (search.length >= 3) {
      const filtered = allProducts.filter(product => 
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(search.toLowerCase()))
      ).slice(0, 5); 
      
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [search, allProducts]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && search.trim()) {
      onSearch(search.trim());
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    if (search.trim()) {
      onSearch(search.trim());
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (productName) => {
    setSearch(productName);
    onSearch(productName);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto" ref={searchRef}>
      <div className="flex items-center w-full border-b-2 border-black">
        <i className="ri-search-2-line text-2xl mr-2 cursor-pointer" onClick={handleSearch}></i>
        <input 
          type='text'
          placeholder='ARA'
          className='w-full h-12 bg-transparent outline-none text-lg placeholder:text-black'
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-50 max-h-60 overflow-y-auto">
          {suggestions.map((product, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
              onClick={() => handleSuggestionClick(product.name)}
            >
              <div className="flex items-center space-x-3">
                {product.image && (
                  <img
                    src={`http://localhost:8001${product.image.startsWith('/') ? '' : '/'}${product.image}`}
                    alt={product.name}
                    className="w-8 h-8 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <div className="font-medium text-sm">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.price} TL</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar