import mongoose from "mongoose";

const connectDB = async () =>
{
    try {
        const conn = await mongoose.connect(process.env.mongourl)
        console.log(`conntect to database ${conn.connection.host}`);
    }
    catch (err) {
        console.log(`error found in database connection ${err}`);
    }
};

export default connectDB;