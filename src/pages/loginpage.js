import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const loginpage = () => {
  const router = useRouter()
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='bg-black h-screen flex items-center justify-center overflow-y-auto'>
      <div className='bg-white shadow-lg p-24 m-10 w-[900px] max-h-[90vh] flex flex-col items-center'>
        LOGO
        <div className='flex items-center w-full mb-6'>
          <div className='flex-grow border-t border-gray-400'></div>
          <h2 className='mx-4 text-2xl font-bold text-black'>Giriş Yap</h2>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>
        <div className='w-full mb-4'>
          <label className='block text-black font-medium mb-1' htmlFor='login-phone'>Telefon<span className='text-black'>*</span></label>
          <input id='login-phone' type='text' placeholder='Telefon' className='w-full border rounded-md px-3 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-pricered' />
          <p className='text-xs text-loginred'>Siparişleriniz ile ilgili bir sorun olması durumunda müşteri hizmetleri size telefonunuzdan ulaşacaktır</p>
        </div>
        <button className='w-full bg-pricered text-white font-bold py-3 rounded-md mb-8 mt-2 hover:bg-loginred transition cursor-pointer'>GİRİŞ YAP</button>
        <div className='flex items-center w-full mb-4 mt-2'>
          <div className='flex-grow border-t border-gray-400'></div>
          <h2 className='mx-4 text-2xl font-bold text-black'>Hesap Oluştur</h2>
          <div className='flex-grow border-t border-gray-400'></div>
        </div>
        <div className='w-full mb-4'>
          <label className='block text-black font-medium mb-1' htmlFor='register-phone'>Telefon Numarası ile Giriş</label>
          <input 
          id='register-phone' 
          type='text' 
          placeholder='Telefon' 
          className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pricered' 
          value={inputValue}
          onChange={handleInputChange}
          />
        </div>
        <button className={`w-full bg-logincreate text-white font-bold py-3 rounded-md mb-6 ${!inputValue ? 'bg-notfocus' : 'bg-logincreate'}`} onClick={() => router.push('/createaccount')}>HESAP OLUŞTUR</button>
        <div className='flex items-start w-full mt-2'>
          <svg xmlns='http://www.w3.org/2000/svg' className='h-7 w-7 mr-2 text-gray-500 flex-shrink-0 mt-1' fill='none' viewBox='0 0 24 24' stroke='currentColor'><circle cx='12' cy='8' r='4' stroke='currentColor' strokeWidth='2' fill='none'/><path d='M4 20c0-4 4-7 8-7s8 3 8 7' stroke='currentColor' strokeWidth='2' fill='none'/></svg>
          <p className='text-xs text-gray-500'>Gizlilik politikamız doğrultusunda kişisel verileriniz Yves Rocher Türkiye (Naturel Kozmetik Tic. A.Ş.) tarafından korunur. Detaylı bilgi için kişisel verilerin korunması aydınlatma metnine <a href='#' className='underline'>buraya tıklayarak</a> ulaşabilirsiniz.</p>
        </div>
      </div>
    </div>
  )
}

export default loginpage