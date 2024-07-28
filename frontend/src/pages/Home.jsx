import React, { useState } from 'react'
import Categories from '../components/Categories'
import Hero from '../components/Hero'
import ProductDisplay from '../components/ProductDisplay'

const Home = () => {

  const [category,setCategory]=useState('All')
  return (
    <>
      <Hero />
      <Categories category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
    </>
  )
}

export default Home

