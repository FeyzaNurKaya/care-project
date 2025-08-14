import React, { useState } from 'react'
import { useRouter } from 'next/router';

const createaccount = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className='bg-black h-screen flex items-center justify-center overflow-y-auto'>
      <div className='bg-white shadow-lg p-24 m-10 w-[700px] max-h-[90vh] flex flex-col items-center'>
        LOGO
        <div className='flex items-center w-full mb-6'>
          <i className="ri-arrow-left-line text-2xl text-black cursor-pointer" onClick={() => router.push('/loginpage')}></i>
          DOĞRULAMA KODU
        </div>
        <div className='w-full mb-4'>
          <label className='block text-black font-medium mb-1' htmlFor='register-phone'>Telefonunuza gönderilen doğrulama kodunu giriniz.</label>
          <input 
            id='register-phone' 
            type='text' 
            placeholder='Telefon' 
            className='w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pricered' 
            value={inputValue}
            onChange={handleInputChange}
          />
          <label className='flex justify-end block text-black font-medium mb-1' htmlFor='register-phone'>Doğrulama Kodu Gelmedi Tekrar Gönder</label>
        </div>
        <button 
          disabled={!inputValue}
          className={`w-1/3 h-12 text-white font-bold rounded-md mb-6 ${!inputValue ? 'bg-notfocus' : 'bg-logincreate'}`}
        >
          HESAP OLUŞTUR
        </button>
      </div>
    </div>
  )
}

export default createaccount