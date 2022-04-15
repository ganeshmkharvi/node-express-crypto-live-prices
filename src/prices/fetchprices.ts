import request from 'request';
const CoinGecko = require('coingecko-api');
import fetch from 'cross-fetch';


    export const fetchPrices = async () => {
       let data = await fetchAPI();
       return data;
	
}

const fetchAPI = async () =>{

    return [ {"ticker":{"base":"BTC","target":"USD","price":"40299.49376333","volume":"20392.15639941","change":"241.95210525"},"timestamp":1650009244,"success":true,"error":""}];

}
