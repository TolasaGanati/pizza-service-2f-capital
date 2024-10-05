import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from './routes/user.route.js';
import roleRoutes from './routes/role.route.js';
import restaurantRoutes from './routes/restaurant.route.js';
import pizzaRoutes from './routes/pizza.route.js';
import toppingRoutes from './routes/topping.route.js';
import orderRoutes from './routes/order.route.js';

dotenv.config();

const app = express();

// CORS Configuration
const corsOptions = {
    origin: 'https://pizza-service-2f-capital-bsam-279a3l1w2-tolasaganatis-projects.vercel.app',  // Allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'],  // Allowed headers
    credentials: false  // Allow credentials (cookies, etc.)
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle Preflight Requests for all routes
app.options('*', cors(corsOptions), (req, res) => {
    res.status(200).send();  // Explicitly return HTTP 200 for OPTIONS preflight requests
});

// Middleware to parse incoming requests
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/role', roleRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/pizza', pizzaRoutes);
app.use('/api/topping', toppingRoutes);
app.use('/api/order', orderRoutes);

// Start the server
app.listen(8000, () => {
    console.log("server running on port 8000");
});
