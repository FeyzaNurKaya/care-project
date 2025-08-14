import React, { useEffect, useState, useRef } from 'react';
import { getProducts } from '../services/api';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const sliderRef = useRef(null);
  const router = useRouter();

  const sliderSettings = {
    dots: false,
    infinite: products.length > 4,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: products.length > 4,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: products.length > 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: products.length > 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          infinite: products.length > 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleProductClick = (productId) => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="container mx-auto bg-white p-4 mt-12">
      <div className="flex justify-center">
        <div className="rounded-lg shadow border border-black text-pricered bg-white px-6 py-2 text-base font-semibold">
          ÖNE ÇIKANLAR
        </div>
      </div>
      <div className="w-full mt-10 relative px-4">
          <Slider {...sliderSettings} ref={sliderRef}>
            {products.map((product, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center border shadow-md rounded-md m-6 p-4 min-h-[500px] bg-gray-50 mx-2 gap-6 cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300"
                onClick={() => handleProductClick(product.id)}
              >
                {product.image && (
                  <img
                    src={`http://localhost:8001${product.image.startsWith('/') ? '' : '/'}${product.image}`}
                    alt={product.name}
                    className="w-72 h-72 object-cover mb-4 rounded"
                  />
                )}
                <h3 className="font-bold mb-2 text-xl">{product.name}</h3>
                <p className="text-pricered font-semibold text-lg">{product.price} TL</p>
              </div>
            ))}
          </Slider>
          {products.length > 4 && (  
            <>
              <button
                 className="absolute -left-12 top-[38%] p-2 text-4xl text-gray-600 hover:text-gray-800 transition-all cursor-pointer z-20 bg-white rounded-full shadow-lg"
                 onClick={() => sliderRef.current?.slickPrev()}
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="absolute -right-12 top-[38%] p-2 text-4xl text-gray-600 hover:text-gray-800 transition-all cursor-pointer z-20 bg-white rounded-full shadow-lg"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </>
          )}
      </div>
    </div>
  );
};

export default ProductContainer;