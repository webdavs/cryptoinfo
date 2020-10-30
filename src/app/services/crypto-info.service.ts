import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CryptoInfoService {
  private URLallNews = "https://api.currentsapi.services/v1/search?keywords=cryptocurrency&apiKey=vf9pq7KPg56O47t6kcS_vlLx4OfdmjSbwSrM38N9Za9JhS03"

  private URLcoinNews = "https://api.currentsapi.services/v1/search?keywords"

  private URLcoinData = "https://api.coingecko.com/api/v3/coins"

  constructor(private http: HttpClient) { }

  getAllNews(){
    return this.http.get(this.URLallNews)
  }

  getCoinData(data){
    return this.http.get(`${this.URLcoinData}/${data}`)
  }

  getCoinNews(data){
    const URLapi = "apiKey=vf9pq7KPg56O47t6kcS_vlLx4OfdmjSbwSrM38N9Za9JhS03"
    return this.http.get(`${this.URLcoinNews}=${data}&${URLapi}`)
  }

  getCoinList(){
    return this.http.get(`${this.URLcoinData}/list`)
  }
}
