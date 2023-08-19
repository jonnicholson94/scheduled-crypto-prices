
export type ApiResponseData = {
        id: number
        name: string
        symbol: string 
        slug: string
        is_active: 0 | 1
        is_fiat: 0 | 1
        cmc_rank: number
        num_market_pairs: number
        circulating_supply: number
        total_supply: number 
        market_cap_by_total_supply: number
        max_supply: number
        date_added: string 
        last_updated: string 
        self_reported_circulating_supply: number 
        self_reported_market_cao: number
        tags: string[]
        platform: {
            id: number 
            name: string 
            symbol: string 
            slug: string 
            token_address: string 
        } | null 
        quote: {
            price: number
            volume_24h: number 
            volume_change_24h: number
            volume_24h_reported: number
            volume_7d: number 
            volume_7d_reported: number 
            volume_30d: number
            volume_30d_reported: number 
            market_cap: number 
            market_cap_dominance: number 
            fully_diluted_market_cap: number 
            percent_change_1h: number 
            percent_change_24h: number 
            percent_change_7d: number 
            percent_change_30: number
            last_updated: string
        }
    }