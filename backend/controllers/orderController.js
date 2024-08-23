import crypto from 'crypto';
import Razorpay from 'razorpay';
import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET
});

const frontend_url = "http://localhost:5175";

// Placing user order and creating Razorpay order
export const placeOrder = async (req, res) => {
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

        const amount = req.body.amount * 100; // Assuming amount is in the main currency unit (e.g., rupees)

        const options = {
            amount: amount, 
            currency: "INR",
            receipt: newOrder._id.toString(),
        };

        const razorpayOrder = await razorpay.orders.create(options);

        res.json({
            success: true,
            orderId: newOrder._id,
            razorpayOrderId: razorpayOrder.id,
            amount: amount,
            currency: "INR",
            key: process.env.RAZORPAY_KEY_ID,
            session_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error placing order" });
    }
};

// export const placeOrder = async (req, res) => {
//     try {
//         // Create a new order in your database
//         const newOrder = new orderModel({
//             userId: req.body.userId,
//             items: req.body.items,
//             amount: req.body.amount,
//             address: req.body.address,
//         });

//         await newOrder.save();
//         await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

//         // Calculate the total amount (in the smallest currency unit)
//         const amount = req.body.amount * 100; // Assuming amount is in the main currency unit (e.g., rupees)

//         // Create a Razorpay order
//         const options = {
//             amount: amount, // amount in the smallest currency unit
//             currency: "INR",
//             receipt: newOrder._id.toString(),
//         };

//         const razorpayOrder = await razorpay.orders.create(options);

//         res.json({
//             success: true,
//             orderId: newOrder._id,
//             razorpayOrderId: razorpayOrder.id,
//             amount: amount,
//             currency: "INR",
//             key: process.env.RAZORPAY_KEY_ID,
//             success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//             cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//         });
//         res.json({success:true,session_url:success_url})
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ success: false, message: "Error placing order" });
//     }
// };

// Verifying Razorpay payment
export const verifyOrder = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, orderId } = req.body;
    
    try {
        const hmac = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET);
        hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
        const generatedSignature = hmac.digest('hex');

        if (generatedSignature === razorpay_signature) {
            await orderModel.findByIdAndUpdate(orderId, { payment: true });
            res.json({ success: true, message: "Paid" });
        } else {
            await orderModel.findByIdAndDelete(orderId);
            res.json({ success: false, message: "Not Paid" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error verifying payment" });
    }
};

// Retrieving user orders
export const userOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving orders" });
    }
};


// import Stripe from "stripe";
// import orderModel from "../models/orderModel.js";
// import userModel from "../models/userModel.js";

// const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
// const frontend_url="http://localhost:5173"

// //placing user order for frontend portion
// const placeOrder=async(req,res)=>{
//         try {
//             const newOrder=new orderModel({
//                 userId:req.body.userId,
//                 items:req.body.items,
//                 amount:req.body.amount,
//                 address:req.body.address,
//             })
//             await newOrder.save();
//             await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

//             const line_item=req.body.items.map((item)=>({
//                 price_data:{
//                     currency:"pkr",
//                     product_data:{
//                         name:item.name
//                     },
//                     unit_amount:item.price*100*278
//                 },
//                 quantity:item.quantity,
//             }));
//             line_items.push({
//                 price_data:{
//                     currency:"pkr",
//                     product_data:{
//                         name:"Delivery Charges",
//                     },
//                     unit_amount:2*100*278,
//                 },
//                 quantity:1,
//             })
            
//             const session=await stripe.checkout.sessions.create({
//                 line_items:line_items,
//                 mode:"payment",
//                 success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
//                 cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
//             })
//             res.json({success:true,session_url:session.url})
//         } catch (error) {
//             console.log(error);
//             res.json({success:false,message:"Error"});
//         }
// };

// //verify order
// const verifyOrder=async(req,res)=>{
//     const {orderId,success}=req.body;
//     try {
//         if(success=="true")
//         {
//             await orderModel.findByIdAndUpdate(orderId,{payment:true});
//             res.json({success:true,message:"Paid"})
//         }
//         else
//         {
//             await orderModel.findByIdAndDelete(orderId);
//             res.json({success:false,message:"Not Paid"})            
//         }
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"})
//     }
// }

// //user order for frontend
// const userOrders =async(req,res)=>{
//     try {
//         const orders=await orderModel.find({userId:req.body.userId})
//         res.json({success:true,data:orders})
//     } catch (error) {
//         console.log(error)
//         res.json({success:false,message:"Error"})
//     }
// }



// export { placeOrder, userOrders, verifyOrder };

