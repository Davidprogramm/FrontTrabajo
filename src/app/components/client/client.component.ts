import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeticionesService } from 'src/app/service/peticiones.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [PeticionesService]
})
export class ClientComponent implements OnInit {
  public nuevoCliente: any = {}; // Objeto para almacenar los datos del nuevo cliente
  public usuarioBusqueda: any[] = []; // Cambiado a una matriz de usuarios
  public lista: boolean = false;
  public listaCliente:boolean=false;
  public id: string = '';
  public usuario: any;
  public listaAgregar:boolean=false;
  public nombre:string =""
  public  identificacionCapturada: string | undefined;
  public creado:boolean=false;
  public clienteAEditar: any = {};
  public actualizado:boolean=false;
  public borrado:boolean=false;




  constructor(
    private _service: PeticionesService,  
  ) {}

  ngOnInit(): void {
    this.listarClientes()
  }

  capturarNombre(id:String) {
    console.log(id)
  }
  capturarIdentificacion(identificacion: string) {
    this.identificacionCapturada = identificacion;
    console.log(this.identificacionCapturada);
  }

  listarClientes() {
        
    this._service.getUser().subscribe(
      (res) => {
        this.usuario = res;
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  abrirCliente(){
  this.listaCliente=true;
  }


  encontrarCliente(clienteID: string) {

    
    this._service.getCliente(clienteID).subscribe(
      (res) => {
        this.clienteAEditar = res; // Cargamos los datos del cliente en clienteAEditar
        console.log(this.clienteAEditar +"EN ENCONTRAR CLIENTE");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  // todos
  salirListaClientes() {
    this.lista = false;
  }
  //uno
  salirListaCliente(){
    this.listaCliente=false;
  }
  createCliente() {
    this._service.createCliente(this.nuevoCliente).subscribe(
      (res) => {
        
        console.log("CREADO CON EXITO" + res)
        this.creado=true;
      },
      (error) => {
      console.log(error)
      this.creado=false;

        
      }
    );
  }



  delete(id: string) {

    console.log(id)
    if (id) {   

        this._service.deleteCliente(id).subscribe(
            (res) => {       
              this.borrado=true;         
              console.log(res)             
            },
            (error) => {
              this.borrado=false;    
              console.log(error)
        
            }
        );
    } else {
        console.error('ID no válido');
    }
    
}


actualizarCliente() {
  if (this.clienteAEditar.id_cliente) {
    this._service.actualizarCliente(this.clienteAEditar.id_cliente.toString(), this.clienteAEditar).subscribe(
      (res) => {
        console.log('Cliente actualizado con éxito', res);
        this.actualizado=true;
        // Realizar cualquier otra acción necesaria después de la actualización.
      },
      (error) => {
        console.error('Error al actualizar el cliente', error);
        this.actualizado=false;
      }
    );
  } else {
    console.error('ID de cliente no válido');
  }
}

}

