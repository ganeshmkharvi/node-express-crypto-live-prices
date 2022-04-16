const http = require('http');
const path = require('path');
const os = require('os');
const express = require('express');
const socketio = require('socket.io');
import { fetchTickerPrices } from "../service/tradePairPrices";

const app = express();
const server = http.createServer(app);
//const io = socketio(server);
const PORT = process.env.PORT || 3001;

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res, next) => {
    res.json(["Welcome to Crypto Live Prices"]);
   });

const io = require('socket.io')(server, {
    cors: {
        origin: "*", methods: ["GET", "POST", "DELETE"],
        transports: ['websocket', 'polling']
    }, allowEIO3: true
});

io.on("connection", function (socket: any) {
    console.log('Client connected');
    setInterval( async () => {
                socket.emit('subscribed-crypto-prices', await fetchTickerPrices());
        	}, 5000);
});

server.listen(PORT, () => console.log(`Cyrpto ticker server running on port ${PORT}`));
