import dotenv from 'dotenv'
dotenv.config()

import querystring from 'querystring'

import crypto from 'crypto'

const apiKey = process.env.APIKEY
const apiSecret = process.env.APISECRETKEY

// This function will withdraw the amount of a coin to the addressTarget
const withdraw = async (coin, amount, addressTarget) => {
  const endpoint = '/sapi/v1/capital/withdraw/apply'

  const data = {
    coin: coin,
    amount: amount,
    address: addressTarget,
    timestamp: Date.now()
  }

  const preSign = querystring.stringify(data);
  const signature = crypto.createHmac('sha256', apiSecret)
    .update(preSign)
    .digest('hex')

  const headers = {
    'X-MBX-APIKEY': apiKey
  }

  const options = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: preSign + '&signature=' + signature
  }

  const url = `https://api.binance.com${endpoint}`
  const response = await fetch(url, options)
  const result = await response.json()

  console.log(result)
}

// VARIABLES
const addressArray = [
  'A COMPLETER',
  'ADRESSE 1',
  'ADRESSE 2',
  'ETC ...'
]
const coin = 'SOL'
// For mint NFT on magic eden
const amount = 0.06

// EXECUTE
addressArray.forEach(address => {
  withdraw(coin, amount, address)
});
