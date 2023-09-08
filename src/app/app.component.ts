import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'distribuidora';
  public titulo:string="";
  public inicio:boolean=false;
  constructor(){
this.inicio=false;
this.titulo="Cliente"
  }
abrir(){
  this.titulo="Cambio"

}
inicioPagina(){
  this.inicio=true;
  
}

}
