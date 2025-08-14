import React, { useEffect, useState } from 'react'

const messages = [
  <span key="1" className='text-white font-bold text-base tracking-wide text-center'>
    ÜYE OLUN, İLK ALIŞVERİŞİNİZE ÖZEL KISA SÜRE GEÇERLİ <span className='font-extrabold'>EKSTRA %10 İNDİRİM KAZANIN!</span>
  </span>,
  <span key="2" className='text-white font-bold text-base tracking-wide text-center'>
    SİPARİŞİNİZ 1 İŞ GÜNÜNDE KARGODA
  </span>
]

const TopBar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % messages.length)
        setAnimate(false)
      }, 500) 
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='w-full bg-black h-12 flex items-center justify-center overflow-hidden relative'>
      <div
        className={`absolute transition-transform duration-700 ease-in-out w-full mt-4 flex justify-center ${animate ? '-translate-y-12 opacity-0' : 'translate-y-0 opacity-100'}`}
        style={{ height: '3rem' }}
      >
        {messages[activeIndex]}
      </div>
    </div>
  )
}

export default TopBar