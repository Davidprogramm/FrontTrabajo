import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { HomeComponent } from './components/home/home.component';
import { VendedorComponent } from './vendedor/vendedor.component'; 


@NgModule({
  declarations: [
    AppComponent,    
    HomeComponent,
    ClientComponent,
    VendedorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
