import request from 'request';
const CoinGecko = require('coingecko-api');
import fetch from 'cross-fetch';

const random = (min, max) => Math.random() * (max - min) + min;

    export const fetchPrices = async () => {
       let data = await fetchAPI();
       return data;
	
}


const fetchAPI = async () =>{
    return [ {"base":"BTC","target":"USD","price": random(40100.00000001, 40400.99999999).toFixed(8),
    "volume":random(12000.00000001, 30000.99999999).toFixed(8),
    "change":random(120.00000001, 330.99999999).toFixed(8)}];
}
