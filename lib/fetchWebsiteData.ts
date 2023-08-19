
// Response data structure

import { ApiResponseData } from "../types/data"

import dotenv from "dotenv"

dotenv.config()

// URL for querying coinmarketcap API, with parameters added

const url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=BTC,ETH,DOT,MATIC&convert=GBP"

// Querying the API to fetch latest prices 

export const fetchWebsiteData = async (): Promise<ApiResponseData[]> => {
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "X-CMC_PRO_API_KEY": process.env.API_KEY
            }
        })
        const data = await response.json()
        return data.data as ApiResponseData[]

    } catch (error) {
        throw new Error(error)
    }
}