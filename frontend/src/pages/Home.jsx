import React, { useState } from 'react'
import Categories from '../components/Categories'
import Hero from '../components/Hero'

const Home = () => {

  const [category,setCategory]=useState('All')
  return (
    <>
      <Hero />
      <Categories category={category} setCategory={setCategory}/>
    </>
  )
}

export default Home

