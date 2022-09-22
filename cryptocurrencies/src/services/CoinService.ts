import axios, { AxiosInstance } from 'axios'
import Coin from '../models/Coin'

export default class CoinService {
  private _http: AxiosInstance
  private _endpoint: string
  private _targetCoin: string
  private _perPage: number
  private _priceChangePercentage: number
  private _coins: Coin[]

  constructor() {
    const urlApi = import.meta.env.VITE_API_URL
    this._http = axios.create({
      baseURL: urlApi,
    })

    this._endpoint = import.meta.env.VITE_COIN_PRICES_ENDPOINT
    this._targetCoin = import.meta.env.VITE_VS_CURRENCY
    this._perPage = parseInt(import.meta.env.VITE_PER_PAGE)
    this._priceChangePercentage = parseFloat(
      import.meta.env.VITE_PRICE_CHANGE_PERCENTAGE
    )

    this._coins = []
  }

  async loadCoins() {
    const response = await this._http(this._endpoint, {
      params: {
        vs_currency: this._targetCoin,
        per_page: this._perPage,
        price_change_percentage: this._priceChangePercentage,
      },
    })

    if (response.status == 200) {
      const { data } = response
      this._coins = data.map((obj: any) => new Coin(obj))
    }

    return this._coins
  }
}
