import cors from "cors";
import express from 'express';
import { connectDB } from './config/db.js';
import productRouter from './routes/productRoute.js';

//app config
const app = express();
const PORT = 4000;

//middleware
app.use(express.json());
app.use(cors());

connectDB();

// API endpoints
app.use("/api/product", productRouter);
app.use("/images", express.static('uploads'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://21ucs192:<password>@cluster0.logyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
