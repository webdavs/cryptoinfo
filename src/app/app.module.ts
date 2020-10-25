import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule} from "@angular/common/http";

import { ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';

import { CryptoInfoService } from "./services/crypto-info.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CryptoInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
