import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from'./routes/user.routes.js'
import authRouter from './routes/auth.route.js'
import listingRouter from './routes/listing.route.js';
import firebase from 'firebase/compat/app'




import cookieParser from "cookie-parser";

const firebaseConfig={}
firebase.initializeApp=(firebaseConfig)


dotenv.config()
const app = express();
mongoose.connect(process.env.MONGO,
 
)
.then(() => {
  console.log('Connected to MongoDB!');
})
.catch((err) => {
  console.log(err);
});

app.use(express.json())
app.use(cookieParser())
app.use('/api/listing', listingRouter);

app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)
app.use('/app/listing', listingRouter)

app.use((err,req,res,nect)=>{
    const statusCode=err.statusCode || 500
    const message =err.message || "Internal Server Error"
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message

    })
})



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
