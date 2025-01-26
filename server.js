import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import productRoutes from './routes/productRoutes.js'


dotenv.config();

connectDB();


const app = express();


app.use(cors({
    origin: 'http://localhost:3000',  
    credentials: true,  
}));
app.use(express.json());
app.use(morgan('dev'));


app.use('/api/v1/auth', authRoute);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/product', productRoutes);


app.get('/', (req,res) => {
    res.send({
        message : 'welcome to frost app'
    })
})


const PORT = process.env.PORT || 8080;


app.listen(PORT, () => { console.log(`server running on ${PORT}`) })
