import React, { useContext, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Verify = () => {

    const[searchParams,setSearchParams]=useSearchParams()
    const success =searchParams.get("success")
    const orderId=searchParams.get("orderId")

    const{url}=useContext(ShopContext)

    const verifyPayment= async()=>{
        const response =await axios.post(url+"/api/order/verify",{success,orderId})
        if(response.data.success)
        {
            navigate("/myorders")
        }
        else{
            navigate("/")
        }
    }

    useEffect(()=>{
        verifyPayment()
    },[])


  return (
    <section>
        <div className='min-h-[60vh] grid'>
            <div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'>

            </div>
        </div>
    </section>
  )
}

export default Verify
