import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
 
const Verify = () => {
    const [searchParams] = useSearchParams();
    const razorpay_order_id = searchParams.get("razorpay_order_id");
    const razorpay_payment_id = searchParams.get("razorpay_payment_id");
    const razorpay_signature = searchParams.get("razorpay_signature");
    const orderId = searchParams.get("orderId");

    const { url } = useContext(ShopContext);
    const navigate = useNavigate();

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, {
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
                orderId
            });

            if (response.data.success) {
                navigate("/myorders");
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Error verifying payment:", error);
            navigate("/");
        }
    };

    useEffect(() => {
        if (razorpay_order_id && razorpay_payment_id && razorpay_signature && orderId) {
            verifyPayment();
        } else {
            navigate("/");
        }
    }, []); // Empty dependency array to run only once

    return (
        <section>
            <div className='min-h-[60vh] grid'>
                <div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'>
                </div>
            </div>
        </section>
    );
};

export default Verify;


// import axios from 'axios';
// import React, { useContext, useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom'; // Import useNavigate
// import { ShopContext } from '../context/ShopContext';

// const Verify = () => {
//     const [searchParams] = useSearchParams();
//     const success = searchParams.get("success");
//     const orderId = searchParams.get("orderId");

//     const { url } = useContext(ShopContext);
//     const navigate = useNavigate(); // Initialize navigate

//     const verifyPayment = async () => {
//         const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
//         if (response.data.success) {
//             navigate("/myorders"); // Use navigate correctly
//         } else {
//             navigate("/"); // Use navigate correctly
//         }
//     };

//     useEffect(() => {
//         verifyPayment();
//     }, []); // Empty dependency array to run only once

//     return (
//         <section>
//             <div className='min-h-[60vh] grid'>
//                 <div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Verify;


// // import axios from 'axios'
// // import React, { useContext, useEffect } from 'react'
// // import { useSearchParams,useNavigate } from 'react-router-dom'
// // import { ShopContext } from '../context/ShopContext'

// // const Verify = () => {

// //     const[searchParams,setSearchParams]=useSearchParams()
// //     const success =searchParams.get("success")
// //     const orderId=searchParams.get("orderId")

// //     const{url}=useContext(ShopContext)

// //     const verifyPayment= async()=>{
// //         const response =await axios.post(url+"/api/order/verify",{success,orderId})
// //         if(response.data.success)
// //         {
// //             navigate("/myorders")
// //         }
// //         else{
// //             navigate("/")
// //         }
// //     }

// //     useEffect(()=>{
// //         verifyPayment()
// //     },[])


// //   return (
// //     <section>
// //         <div className='min-h-[60vh] grid'>
// //             <div className='w-24 h-24 place-self-center border-4 border-t-secondary rounded-full animate-spin'>

// //             </div>
// //         </div>
// //     </section>
// //   )
// // }

// // export default Verify
