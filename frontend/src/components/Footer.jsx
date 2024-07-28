import React from 'react'
import SocialIcons from "./SocialIcons"

const Footer = () => {
  return (
    <footer className='max-padd-container bg-tertiary py-8'>
      <div className='flex-center flex-col gap-y-4'>
        <h4 className='text-white text-center'>
          Follow us on our <span className='text-orange-400'>Social Handles</span>
        </h4>
        <SocialIcons/>
        <hr className='h-[1px] w-3/3 my-3'/>
        <div className='text-white text-center'>Copyright &copy; Nekome Apparels Pvt. Ltd.|ALl rights reserved</div>
      </div>
    </footer>
  )
}

export default Footer

