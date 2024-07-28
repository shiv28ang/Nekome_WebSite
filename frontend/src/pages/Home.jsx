import React, { useState } from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import GetApp from '../components/GetApp'
import Hero from '../components/Hero'
import ProductDisplay from '../components/ProductDisplay'

const Home = () => {

  const [category,setCategory]=useState('All')
  return (
    <>
      <Hero />
      <Categories category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
      <GetApp/>
      <Footer/>
      </>
  )
}

export default Home

