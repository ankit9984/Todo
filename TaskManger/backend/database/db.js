import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(() => console.log('Database Connect Successfully'))
        .catch((error) => console.error('Database: ', error))
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;