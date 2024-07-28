import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section
      className='gap-y-1 max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[744px] w-full '
      id="home"
    >
      <div className='relative top-24 xs:top-72'>
        <div>
          <h4 className='uppercase medium-18 tracking-wider'>
            Street Wear Essentials
          </h4>
          <h1 className="h1 capitalize max-w-[40rem]">
            Upgrade Your Fashion <span className='text-secondary'>with Every Click</span> Shop Today!!!
          </h1>
          <p className='my-5 max-w-[33rem]'>
            Loreum ipdbfjhdsfhjsdg b hkjfjsdfjd jfhgdsjfgjsdhg jjkfjksabhfsd bhzsbmdfsjdfb bdmbfmdsbjf.
          </p>
          {/* buttons */}
          <div className='flex items-center gap-x-4'>
            <Link to='' className='inline-flex items-center justify-center gap-4 p-3 bg-white rounded-xl'>
              <div className='regular-14 leading-tight pl-4'>
                <h5 className='uppercase font-bold'> New Arrivals</h5>
                <p className='regular-14 mt-1'>10% Off</p>
              </div>
              <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter'>
                <FaArrowRight />
              </div>
            </Link>
            <Link to='' className='inline-flex items-center justify-center gap-4 p-3 bg-tertiary text-white rounded-xl'>
              <div className='regular-14 leading-tight pl-4'>
                <h5 className='uppercase font-bold'> Hot Deals</h5>
                <p className='regular-14 mt-1'>40% Off</p>
              </div>
              <div className='bg-primary h-10 w-10 p-1 rounded-full flexCenter text-tertiary'>
                <FaArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

// import React from 'react';

// const Hero = () => {
//   return (
//     <section
//       className='h-[744px] w-full bg-hero bg-cover bg-center'
//       id="home"
//     >
//       <div className='relative top-24 xs:top-72'>
//         <div>
//           <h1 className="h1 capitalize text-white">
//             Test Hero Section
//           </h1>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero;
