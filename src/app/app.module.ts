import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CadernoModule } from './components/caderno/caderno.module';
import { DoceModule } from './components/doce/doce.module';
import { GibiModule } from './components/gibi/gibi.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//constructor(private request: HttpClient) { //Injeção de Dependência. para requisitar a API. precisso do (HttpClientModule)
    CadernoModule,
    DoceModule,
    GibiModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
