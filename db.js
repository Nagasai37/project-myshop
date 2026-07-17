import mongoose from "mongoose";
import dns from "node:dns"
dns.setDefaultResultOrder("ipv4first")
dns.setServers(['8.8.8.8','1.1.1.1']);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://23ht1a0537_mdb:8309089450@mycluster.vfofxnc.mongodb.net/placement_manager?retryWrites=true&w=majority&appName=mycluster"
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed");
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;