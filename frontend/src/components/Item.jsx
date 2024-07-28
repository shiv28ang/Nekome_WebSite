import React, { useState } from 'react'
import { FaMinus, FaPlus, FaUpRightAndDownLeftFromCenter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Item = ({product}) => {

    const [itemCount,setItemCount]=useState(0)
  return (
    <div className='shadow-sm'>
      <div className='relative group'>
        <img src={product.image} alt="" className='rounded-tl-2xl rounded-br-2xl'/>
        <div className='absolute right-3 bottom-3 flexCenter gap-x-2'>
            <Link to={`/product/${product._id}`}
            className='bg-white h-8 w-8 p-2 rounded-full shadow-inner
            cursor-pointer transition-all duration-500'>
            <FaUpRightAndDownLeftFromCenter/>
            </Link>
            {!itemCount ? (
                <FaPlus onClick={()=>setItemCount(prev=>prev+1)}
                className="bg-white h-8 w-8 p-2 rounded-full shadow-inner cursor-pointer"/>
            ) : ( 
            <div className='bg-white rounded-full flexCenter gap-2' >
                <FaMinus onClick={()=>setItemCount(prev=>prev-1)}
                className='rounded-full h-8 w-8 p-2 cursor-pointer'/>
                <p>{itemCount}</p>
                <FaPlus onClick={()=>setItemCount(prev=>prev+1)}
                className='rounded-full bg-secondary h-6 w-6 p-1 mr-1 cursor-pointer'/>
            </div>
        )}
        </div>
      </div>
      <div className='p-3'>
        <div className='flexBetween'>
            <h5 className='text-[16px] font-bold text-gray-900/50'>
            {product.category}</h5>
            <div className='text-secondary bold-18'>₹{product.price}</div>
        </div>
        <h4 className='medium-18 mb-1 line-clamp-1'>{product.name}</h4>
        <p className='line-clamp-2'>{product.description}</p>
      </div>
    </div>
  )
}

export default Item
