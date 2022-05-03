<p align="center">
  <h3 align="center">Real time Mock crypto prices</h3>
  <p align="center">
    <a href="https://github.com/ganeshmkharvi/node-express-crypto-live-prices/issues">Report Bug </a>
    ·
    <a href="https://github.com/ganeshmkharvi/node-express-crypto-live-prices/issues">Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### What's inside this repo?

- Express Server configured to accept JSON request.
- Apis to get and save transaction details.
- Production standard structuring of the application.
- High SoC (feature based).
- Postman collection.
- Socket.io for real time updates.

#### Task description

On connecting with socket.io you will get crypto prices in the following format: 

 [{
    base: 'ADA', target: 'USD', priceStart: 0.29, priceEnd: 0.99, name: 'Cardano',
    baseUrl: 'basecurrencyUrlLink,
    baseDecimalPlaces: 6, targetDecimalPlaces: 2, targetUrl: 'targetcurrencyUrlLink'
}]

Above is just one example for ADA to USD. Similarly you will get it for other currencies once you connect your client <a href="https://github.com/ganeshmkharvi/react-crypto-exchange-rates">react-crypto-exchange-rates</a>  to socket.io and after that on every interval that you set in this project. At the same time data will also get stored in the mongoDB. The same data will be displayed in <a href="https://www.figma.com/file/YMRGT8t3GlxDMH8cN7BTw9/Technical-Assessment?node-id=21%3A2715">Historical data</a> screen.

The data you used can be found in <a href="https://www.figma.com/file/YMRGT8t3GlxDMH8cN7BTw9/Technical-Assessment?node-id=24%3A1295">Exchange screen</a> 

On Save click you can call /api/detail (POST) for saving transaction. If you change the amount then you need to send conversionType as "Exchanged" else it will be "Live Price". 

All the saved records can be shown in the grid <a href="https://www.figma.com/file/YMRGT8t3GlxDMH8cN7BTw9/Technical-Assessment?node-id=21%3A2715">Historical data</a>. You will get the data from /api/detail (GET).

You will get all the details in the postman collection inside this repo.

### Built With

- [Node.js]() - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express.js]() - Minimal and flexible Node.js web application framework.
- [MongoDB]() - Cross-platform document-oriented database program.
- [Socket.io]() - Event driven JavaScript library for real time web applications.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps :

### Prerequisites

To run this project, you'll need to have the following installed:

- Node.js : [https://nodejs.org](https://nodejs.org)

- npm :
  ```sh
  npm install npm@latest -g
  ```
- MongoDB : [https://mongodb.com](https://mongodb.com) <br>

> You can also use MongoDB Atlas if you prefer.
> <br>

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/node-express-crypto-live-prices.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```

3. Create `.env` file and configure :

   ```JS
   PORT = <PORT>
   MONGO_DB_URL = <MONGO_DB_URL> 
   INTERVAL = <INTERVAL>
   ```
   E.g. MONGO_DB_URL = mongodb://localhost:27017/cryptodb <br/>
   Here, cryptodb is the database name. <br/>
   INTERVAL = 240000 <br/>
   Here, INTERVAL can be set to any value in milliseconds. I have set it to 240000 which is 4 minutes. So the data will be emitted after every 4 minutes.

4. Start the server :
   ```sh
   npm start
   ```
   
