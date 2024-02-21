# Transfert coin with Binance

## Create .env file in the same directory and fill it
```sh
APIKEY=
APISECRETKEY=
```

In index.js, complete the addressArray with your address
```js
const addressArray = [
  'A COMPLETER',
  'ADRESSE 1',
  'ADRESSE 2',
  'ETC ...'
]
```

For the coin and the amount, just modify index.js 
```
const coin = 'SOL'
const amount = 0.06
```

## For use the project
Install dependencies
```sh
npm install
```

Run the transfert 
```sh
npm run dev
```
