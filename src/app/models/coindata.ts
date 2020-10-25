export interface coinData {
  image?: {large?: String};
  name?: String;
  market_data?: {
    price_change_percentage_24h_in_currency?: { usd?: Number };
    current_price?: {usd?: Number };
    price_change_24h?: Number; 
  };
}
