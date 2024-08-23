import express from "express";
import { placeOrder, verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

// Route to place a new order with Razorpay
orderRouter.post("/place", authMiddleware, placeOrder);

// Route to verify Razorpay payment
orderRouter.post("/verify", verifyOrder);

export default orderRouter