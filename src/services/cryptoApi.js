

const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-6cvKTijgYKBj5ahKQMqLx9UR" 

const getCoinList = (page , currency)=> {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`
}

const searchCoin = (query) => `${BASE_URL}/search/?query=${query}`

const marketChart = (coin)=> `${BASE_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

export  {getCoinList , searchCoin , marketChart}