import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"
import userModel from "../models/userModel.js"

//login user
const loginUser =async(req,res)=>{
    const{email,password}=req.body;
    try {
        const user=await userModel.findOne({email});

        if(!user)
        {
            return res.json({success:false,message:"User doesn't exists"})
        }
        const isMatch= await bcrypt.compare(password,user.password)

        if(!isMatch)
        {
            return res.json({success:false,message:"Invalid Credentials"})
        }

        const token=createToken(user._id);
        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

//create token
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser =async(req,res)=>{
    const {name,password,email}=req.body;
    try{
        //CHECK USER EXISTS OR NOT
        const exists=await userModel.findOne({email})
        if(exists)
        {
            return res.json({success:false,message:"User Already Exists"})
        }

        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter A Valid Email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"Enter A Strong Password"})
        }

        //hashing user password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword =await bcrypt.hash(password,salt)

        const newUser =new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })
        const user=await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})
    }
    catch(error)
    {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
    }


export { loginUser, registerUser }

