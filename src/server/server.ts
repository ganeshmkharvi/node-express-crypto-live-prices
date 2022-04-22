import * as dbConfig from '../config/database';
import http from 'http';
import express from 'express';
import { fetchTickerPrices } from "../service/tradePairPrices";
import config from '../config/config';
import { userRoute } from '../routes/detail';
import * as constants from "../utility/constants";
import { insertMany } from '../service/detail';

dbConfig.connect();

const app = express();

const server = http.createServer(app);
const PORT = config.port || 3001;
app.use(express.json());
userRoute(app);

app.get("/", (req, res) => {
    res.json(["Welcome to Crypto Live Prices"]);
});

// eslint-disable-next-line 
const io = require('socket.io')(server, {
    cors: {
        origin: "*", methods: ["GET", "POST", "DELETE"],
        transports: ['websocket', 'polling']
    }, allowEIO3: true
});

// eslint-disable-next-line 
io.on("connection", async function (socket: any) {
    console.log('Client connected');
    const firstConnData = await fetchTickerPrices();
    socket.emit('subscribed-crypto-prices', firstConnData);
    await insertMany(firstConnData);

    setInterval(async () => {
        const intervalData = await fetchTickerPrices();
        socket.emit('subscribed-crypto-prices', intervalData);
        await insertMany(intervalData);
    }, Number(config.interval));
});

server.listen(PORT, () => console.log(`Cyrpto ticker ${constants.serviceRunning} ${PORT}`));
