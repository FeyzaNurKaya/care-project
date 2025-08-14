import React from 'react'

const BottomPart = () => {
  return (
    <div className='container mx-auto mt-16'>
        <div className='flex justify-between items-center gap-18 border-t border-gray-200 pt-4'>
            <div className='flex items-center gap-4'>
                <p className='text-xl font-bold text-pricered'>TAKİPTE KALIN</p>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <div className='border border-pricered rounded-full px-3 py-2 cursor-pointer'>
                        <i className="ri-instagram-line text-xl align-middle text-pricered"></i>
                    </div>
                </a>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-xl font-bold text-pricered'>BİZE ULAŞIN</p>
                <a href='https://wa.me/905555555555' target='_blank' rel='noopener noreferrer'>
                    <div className='border border-pricered rounded-full px-3 py-2 cursor-pointer'>
                        <i className="ri-whatsapp-line text-xl align-middle text-pricered"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default BottomPart