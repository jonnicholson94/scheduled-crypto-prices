
# scheduled-crypto-prices

A simple Node.js app which runs a Cron job every day at 04:00am GMT. 

It works broadly as follows:

- The Cron job triggers at 04:00am
- An API call is made to CoinMarketCap to fetch the latest Crypto prices for a select number of assets
- Upon a successful API call, an email is triggered using Resend to a pre-determined email address
    - This email is created using a simple JSX template, and passed in a parameter to the Resend call
    - Multiple parameters are passed in to the JSX based upon the data received from the API response

In terms of languages and packages used:

- Node.js 
- TypeScript
    - When the script is run, the TypeScript code is compiled, then stored inside of a 'dist' directory, before the code is executed
- node-cron
    - This was good fun, and simple easy to set up and use
- Resend 
    - They're a fairly new company, who provide a simple email API which is really easy to set up

