import * as dbConfig from '../config/database';
import http from 'http';
import path from 'path';
import express from 'express';
import { fetchTickerPrices } from "../service/tradePairPrices";
import config from '../config/config';
import { userRoute } from '../routes/detail';

dbConfig.connect();

const app = express();

const server = http.createServer(app);
const PORT = config.port || 3001;
app.use(express.json());
userRoute(app);

app.get("/", (req, res, next) => {
    res.json(["Welcome to Crypto Live Prices"]);
   });

const io = require('socket.io')(server, {
    cors: {
        origin: "*", methods: ["GET", "POST", "DELETE"],
        transports: ['websocket', 'polling']
    }, allowEIO3: true
});

io.on("connection", async function (socket: any) {
    console.log('Client connected');
    socket.emit('subscribed-crypto-prices', await fetchTickerPrices());
    setInterval( async () => {
                socket.emit('subscribed-crypto-prices', await fetchTickerPrices());
        	}, Number(config.interval));
});

server.listen(PORT, () => console.log(`Cyrpto ticker server running on port ${PORT}`));
