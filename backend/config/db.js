// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const uri = 'mongodb://21ucs192:shivang28@cluster0-shard-00-00.logyw.mongodb.net:27017,cluster0-shard-00-01.logyw.mongodb.net:27017,cluster0-shard-00-02.logyw.mongodb.net:27017/?ssl=true&replicaSet=atlas-mkcuwz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';
//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("DB Connected");
//   } catch (error) {
//     console.error("DB Connection Error: ", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";

export const connectDB =async()=>{
    await 
    mongoose.connect
    // ('mongodb://21ucs192:shivang28@cluster0-shard-00-00.logyw.mongodb.net:27017,cluster0-shard-00-01.logyw.mongodb.net:27017,cluster0-shard-00-02.logyw.mongodb.net:27017/?ssl=true&replicaSet=atlas-mkcuwz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0')
 ('mongodb+srv://21ucs192:shivang28@cluster0.logyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log("DB connected"))
}


// const mongoose = require('mongoose');
// const uri = "mongodb+srv://21ucs192:shivang28@cluster0.logyw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

// async function run() {
//   try {
//     // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//     await mongoose.connect(uri, clientOptions);
//     await mongoose.connection.db.admin().command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await mongoose.disconnect();
//   }
// }
// run().catch(console.dir);
