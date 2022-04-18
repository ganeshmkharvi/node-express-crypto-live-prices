import dotenv from 'dotenv';
dotenv.config();

export default {
    mongoDbUrl: process.env.MONGO_DB_URL,
    port: process.env.PORT, 
    interval: process.env.INTERVAL
};