import { Component, OnInit } from "@angular/core";
import { CryptoInfoService } from "../../services/crypto-info.service";
import { News } from "../../models/news";
import { Coin } from "../../models/coin";
import { coinData } from "../../models/coindata";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  allNews: News[] = []
  coin: coinData = {}
  coinNews: News[] = []

  coinData: String = null

  coinList: Coin[] = []
  
  constructor(private cryptoService: CryptoInfoService) {}

  ngOnInit() {

    this.cryptoService.getAllNews().subscribe(
      (res) => {
        console.log(res['articles'])
        this.allNews = res['articles']
      },
      (err) => {
        console.log(err)
      }
    )

    this.myStyle = {
      'position': "fixed",
      'width': "100%",
      'height': "100%",
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': '#051218',
    };

    this.myParams = {
      particles: {
        number: {
          value: 10,
        },
        color: {
          value: "#525dac",
        },
        shape: {
          type: "circle",
        },
        size: {
          value: 50,
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'top',
        },
        line_linked: {
          enable: false,
        }
      },
    };

    this.cryptoService.getCoinList().subscribe(
      (res) => {
        this.coinList.push(res)
        console.log(this.coinList)
      },
      (err) => {
        console.log(err)
      }
    )

    this.clearDataInfo()

    $(document).ready(function(){
      (<any>$('.modal')).modal();
    });

    $(document).ready(function(){
      (<any>$('.sidenav')).sidenav();
    });
  }

  showDataInfo(){
    this.cryptoService.getCoinData(this.coinData.toLocaleLowerCase()).subscribe(
      (res) => {
        if (this.coinData = '') {
          alert("Debe llenar el campo")
        }
        console.log(res)
        this.coin = res
      },
      (err) => {
        
        alert(err['error'].error)
        console.log(err)
      }
    )
    this.cryptoService.getCoinNews(this.coinData).subscribe(
      (res) => {
        console.log(res['articles'])
        this.coinNews = res['articles']
      },
      (err) => {
        console.log(err)
      }
    )
  }

  clearDataInfo(){
    delete(this.coin)
    this.coinData = null
  }
}
