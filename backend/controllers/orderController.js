import Stripe from "stripe";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)
const frontend_url="http://localhost:5173"

//placing user order for frontend portion
const placeOrder=async(req,res)=>{
        try {
            const newOrder=new orderModel({
                userId:req.body.userId,
                items:req.body.items,
                amount:req.body.amount,
                address:req.body.address,
            })
            await newOrder.save();
            await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

            const line_item=req.body.items.map((item)=>({
                price_data:{
                    currency:"pkr",
                    product_data:{
                        name:item.name
                    },
                    unit_amount:item.price*100*278
                },
                quantity:item.quantity,
            }));
            line_items.push({
                price_data:{
                    currency:"pkr",
                    product_data:{
                        name:"Delivery Charges",
                    },
                    unit_amount:2*100*278,
                },
                quantity:1,
            })
            
            const session=await stripe.checkout.sessions.create({
                line_items:line_items,
                mode:"payment",
                success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
            })
        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"});
        }
};

//verify order
const verifyOrder=async(req,res)=>{
    const {orderId,success}=req.body;
    try {
        if(success=="true")
        {
            await orderModel.findByIdAndUpdate(orderId,{payment:true});
            res.json({success:true,message:"Paid"})
        }
        else
        {
            await orderModel.findByIdAndDelete(orderId);
            res.json({success:false,message:"Not Paid"})            
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

//user order for frontend
const userOrders =async(req,res)=>{
    try {
        const orders=await orderModel.find({userId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}



export { placeOrder, userOrders, verifyOrder };

