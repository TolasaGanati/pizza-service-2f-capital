
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"
import userRoutes from './routes/user.route.js';
import roleRoutes from './routes/role.route.js';
import restaurantRoutes from './routes/restaurant.route.js';
import pizzaRoutes from './routes/pizza.route.js';
import toppingRoutes from './routes/topping.route.js';
import orderRoutes from './routes/order.route.js';

dotenv.config();

const app = express();

app.use(cors({  origin: 'https://pizza-service-2f-capital-bsam.vercel.app',  
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // List of allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // List of allowed headers
    credentials: true }));
app.use(express.json());
// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/topping', toppingRoutes);
app.use('/api/order', orderRoutes);

app.listen(8000, () => {
  console.log("server running on port 8000");
});
