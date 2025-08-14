import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const categories = [
  { id: 2, name: 'GÜNEŞ', image: '/images/sunset.jpg' },
  { id: 1, name: 'CİLT BAKIMI', image: '/images/care.jpg' },
  { id: 3, name: 'SETLER', image: '/images/sets.jpg' },
]

const Tabselection = () => {
  const router = useRouter()

  const handleCategoryClick = (categoryId) => {
    router.push(`/category/${categoryId}`)
  }

  return (
    <div className='container mx-auto mt-16'>
      <div className='grid grid-cols-2 gap-4'>
        {categories.slice(0,2).map((cat) => (
          <div
            key={cat.id}
            className={`col-span-1 relative w-full h-96 overflow-hidden flex items-center justify-center cursor-pointer border-4 ${false ? 'border-blue-500' : 'border-transparent'}`}
            onClick={() => handleCategoryClick(cat.id)}
          >
            <Image 
              src={cat.image} 
              alt={cat.name} 
              fill 
              style={{objectFit:'cover'}} 
              className="pointer-events-none"
            />
            <span className='absolute inset-0 flex items-center justify-center font-bold text-white text-xl drop-shadow-lg'>{cat.name}</span>
          </div>
        ))}
      </div>
      {categories.slice(2).map((cat) => (
        <div
          key={cat.id}
          className={`col-span-2 relative w-full h-96 mt-4 cursor-pointer border-4 ${false ? 'border-blue-500' : 'border-transparent'}`}
          onClick={() => handleCategoryClick(cat.id)}
        >
          <Image 
            src={cat.image} 
            alt={cat.name} 
            fill 
            style={{objectFit:'cover'}} 
            className="pointer-events-none"
          />
          <span className='absolute inset-0 flex items-center justify-center font-bold text-white text-xl drop-shadow-lg'>{cat.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Tabselection
