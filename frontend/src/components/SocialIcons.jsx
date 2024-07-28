import React from 'react'
import { RiInstagramFill, RiLinkedinFill, RiTwitterFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const SocialIcons = () => {
  return (
    <div className='flex tems-center justify-center gap-6 pr-4 py-4 '>
     <Link to={''} className='text-[#ff2e63] text-2xl hover:-translate-y-1 transition-all duration-500'><RiInstagramFill/></Link>
     <Link to={''} className='text-[#08d9d6] text-2xl hover:-translate-y-1 transition-all duration-500'><RiLinkedinFill/></Link>
     <Link to={''} className='text-[#eaeaea] text-2xl hover:-translate-y-1 transition-all duration-500'><RiTwitterFill/></Link>
    </div>
  )
}

export default SocialIcons
