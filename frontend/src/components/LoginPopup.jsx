import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6'

const LoginPopup = ({setShowLogin}) => {
    const [state,setState]=useState("Login")
    return (
        <div className='absolute h-full w-full bg-black/40 z-50 flexCenter'>
            <form className='bg-white w-[366px] p-7 rounded-1g shadow-md'>
            <div className='flex justify-between items-baseline'>
                <h4 className='bold-28'>{state}</h4>
                <FaXmark onClick={()=>setShowLogin(false)} 
                className='medium-20 text-slate-900/70 cursor-pointer'/>
            </div>
            <div className='flex flex-col gap-4 my-6'>
            <input type='text' placeholder='Name' required className="border border-gray p-2 pl-4 rounded-md outline-none"/>
            <input type='email' placeholder='E-mail' required className="border border-gray/20 p-2 pl-4 rounded-md outline-none"/>
            <input type='password' placeholder='Password' required className="border border-gray p-2 pl-4 rounded-md outline-none"/>
            </div>
            <button type="submit" className='btn-secondary rounded-md w-full'>
                {state==="Sign Up" ? "Create Account" : "Login"}
            </button>
            <div className='flex items-baseline gap-x-3 mt-6 mb-4'>
                <input type="checkbox" required/>
                <p className='relative bottom-1'>By continuing you agree to our
                    <span>Terms Of Service</span> and
                    <span>Privacy Policy</span>
                </p>
            </div>
            {state==="Sign Up" ?(
                <p>
                    Already have an account?{" "} 
                    <span onClick={()=>setState("Loginn")}>Login</span>
                </p>
            ):(
                <p>
                Don't have an account?{" "} 
                <span onClick={()=>setState("Sign Up")}>Sign-Up</span>
            </p>
            )}
            </form>
        </div>
  )
}

export default LoginPopup
