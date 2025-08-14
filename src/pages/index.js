import React from 'react'
import Layout from '../components/Layout/Layout'
import ProductContainer from '../components/ProductContainer'
import Head from 'next/head'
import BottomPart from '../components/BottomPart'
import Tabselection from '@/components/TabSelection'

const index = () => {
  return (
    <>
      <Head>
        <title>Serra Care</title>
      </Head>
      <Layout>
        <Tabselection/>
        <div className='container mx-auto flex flex-col gap-4'>
          <ProductContainer />
        </div>
        <BottomPart />
        {/* WhatsApp Button */}
        <a
          href='https://wa.me/905555555555' 
          target='_blank'
          rel='noopener noreferrer'
          className='fixed bottom-12 right-8 z-50'
        >
          <div className='bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-3 shadow-lg flex items-center justify-center'>
            <i className='ri-whatsapp-line text-2xl'></i>
          </div>
        </a>
      </Layout>
    </>
  )
}

export default index