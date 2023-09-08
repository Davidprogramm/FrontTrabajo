import {Injectable} from '@angular/core';
import { HttpClient,HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable(

)
export class PeticionesService{

    //buscamos el Url de la pagina
    public urlApi:String="";
    
  
    //Se crea el constructor y se inyecta el servicio Http

    constructor(

        private _http:HttpClient
        
    ){
        this.urlApi="http://localhost:8080"

    }

    // creamos un metodo
    getUser():Observable<any>{               
       var request= "/listarClientes"
       var url=this.urlApi+request
       return this._http.get(url)

    }

    getCliente(id:String):Observable<any>{

        var reques="/buscarCliente/"+id
        var url=this.urlApi+reques
        return this._http.get(url)
    }

    createCliente(nuevoCliente:any):Observable<any>{
        var reques="/addcliente"
        var url=this.urlApi+reques
        let objetoJson=JSON.stringify(nuevoCliente);
        var header= new HttpHeaders().set("Content-Type","application/json")
        return this._http.post(url,objetoJson,{headers: header})

    }

    deleteCliente(id: string): Observable<any> {
        const requestUrl = `/delete/${id}`;
        const url = this.urlApi + requestUrl;
        return this._http.delete(url);
      }

getClientePorIdentificacion(identificacion: string): Observable<any> {
    const requestUrl = "/buscarCliente/"+identificacion;
    const url = this.urlApi + requestUrl;
    return this._http.get(url);
  }

  actualizarCliente(id:string , clienteActualizado:any): Observable<any> {
    const requestUrl = "updatecliente/"+id;
    const url = this.urlApi + requestUrl;
    const objetoJson = JSON.stringify(clienteActualizado);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.post(url, objetoJson, { headers: headers });
  }
  

  //VENDEDORES


getVendedores():Observable<any>{
    var request="/listarVendedores"
    var url =this.urlApi+request
    return this._http.get(url)
}
crearVendedor(nuevoVendedor:any):Observable<any>{
    var reques="/addvendedor"
    var url=this.urlApi+reques
    let objetoJson=JSON.stringify(nuevoVendedor);
    var header= new HttpHeaders().set("Content-Type","application/json")
    return this._http.post(url,objetoJson,{headers: header})

}
getVendedor(id:String):Observable<any>{

    var reques="/buscarVendedor/"+id
    var url=this.urlApi+reques
    return this._http.get(url)


}
deleteVendedor(id: string): Observable<any> {
    const requestUrl = "/deleteVendedor/"+id
    const url = this.urlApi + requestUrl;
    return this._http.delete(url);
  }

  actualizarVendedor(id:string , vendedorActualizado:any): Observable<any> {
    const requestUrl = "/updatevendedor/"+id;
    const url = this.urlApi + requestUrl;
    const objetoJson = JSON.stringify(vendedorActualizado);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this._http.post(url, objetoJson, { headers: headers });
  }
 
  


}