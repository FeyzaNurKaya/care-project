import React from 'react'

const Footer = () => {
  return (
    <div className='mt-12'>
      <div className='flex items-start bg-footerbg h-16'>
        <div className='container mx-auto flex flex-row p-4 gap-6 cursor-pointer'>
          <p className='text-sm font-medium text-footercolor'>Satış Sözleşmesi</p>
          <p className='text-sm font-medium text-footercolor'>Gizlilik Sözleşmesi</p>
          <p className='text-sm font-medium text-footercolor'>Aydınlanma Metni</p>
          <p className='text-sm font-medium text-footercolor'>Memnuniyet Anketi Aydınlanma Metni</p>         
          <p className='text-sm font-medium text-footercolor'>Şirket Bilgileri</p>
          <p className='text-sm font-medium text-footercolor'>ÇEREZ AYARLARINI YAPILANDIR</p>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex items-center justify-center text-black border-b border-footerbg p-3'>BİTKİSEL KOZMETİK LABORATUVARLARI ®</div>
      </div>
    </div>
  )
}

export default Footer