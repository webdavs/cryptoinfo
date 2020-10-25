import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CryptoInfoService {
  private URLallNews = "https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=61b771cd22af4892a81aa51eb8b60b42"

  private URLcoinNews = "https://newsapi.org/v2/everything?q"

  private URLcoinData = "https://api.coingecko.com/api/v3/coins"

  constructor(private http: HttpClient) { }

  getAllNews(){
    return this.http.get(this.URLallNews)
  }

  getCoinData(data){
    return this.http.get(`${this.URLcoinData}/${data}`)
  }

  getCoinNews(data){
    const URLapi = "apiKey=61b771cd22af4892a81aa51eb8b60b42"
    return this.http.get(`${this.URLcoinNews}=${data}&${URLapi}`)
  }

  getCoinList(){
    return this.http.get(`${this.URLcoinData}/list`)
  }
}
