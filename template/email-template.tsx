
import * as React from "react"

import { ApiResponseData } from "../types/data"

type TemplateProps = {
    data: ApiResponseData
}

type CardProps = {
    asset: string 
    currentPrice: number 
    priceChange: number
}

const EmailCard: React.FC<Readonly<CardProps>> = ({ asset, currentPrice, priceChange}) => {
    return (
        <div>
            <h2>{asset}</h2>
            <p>Current price: £{currentPrice}</p>
            <p>Price change last 24 hours: {priceChange}</p>
        </div>
    )
}

export const EmailTemplate: React.FC<Readonly<TemplateProps>> = ({ data }) => {
    return (
        <div>
            <h1>Here's a breakdown on how these top crypto assets have performed over the last 24 hours:</h1>
            <EmailCard asset={data["BTC"][0].symbol} currentPrice={data["BTC"][0].quote["GBP"].price} priceChange={data["BTC"][0].quote["GBP"].percent_change_24h} />
            <EmailCard asset={data["ETH"][0].symbol} currentPrice={data["ETH"][0].quote["GBP"].price} priceChange={data["ETH"][0].quote["GBP"].percent_change_24h} />
            <EmailCard asset={data["DOT"][0].symbol} currentPrice={data["DOT"][0].quote["GBP"].price} priceChange={data["DOT"][0].quote["GBP"].percent_change_24h} />
            <EmailCard asset={data["MATIC"][0].symbol} currentPrice={data["MATIC"][0].quote["GBP"].price} priceChange={data["MATIC"][0].quote["GBP"].percent_change_24h} />
        </div>
    )
}

