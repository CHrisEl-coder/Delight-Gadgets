import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Newsletter from '@/components/Newsletter'
import ProductSlide from '@/components/ProductSlide'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <>
      <Hero />
      <Experience />
      <ProductSlide />
      <Services />
      <Newsletter/>
    </>
  )
}

export default Home