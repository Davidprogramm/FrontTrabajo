import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../service/peticiones.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css'],
  providers:[PeticionesService]
})
export class VendedorComponent implements OnInit {

  public vendedor: any;
  public nuevoVendedor: any = {};
  public creado:boolean=false;
  public id: string = '';
  public vendedorAEditar: any = {};
  public borrado:boolean=false;
  public actualizado:boolean=false;



constructor(
  private _service: PeticionesService,
){}

ngOnInit(): void {
    this.listarVendedores();
}
listarVendedores(){
  this._service.getVendedores().subscribe(
    (res)=>{
      this.vendedor=res
    },
    (error)=>{
      console.log(error);
    }
  );

}
crearVendedor(){
  this._service.crearVendedor(this.nuevoVendedor).subscribe(
    (res)=>{
      console.log("creado con exito"+res)
      this.creado=true;


    },
    (error)=>{
      console.log(error)
      this.creado=false;

    }
  );
}

encontrarVendedor(vendedorID:string){
  this._service.getVendedor(vendedorID).subscribe(
    (res)=>{
      this.vendedorAEditar=res;
      console.log(this.vendedorAEditar+"En encontrar VENDEDOR")
    },
(error)=>{
  console.log(error)
}

  )

}
delete(id:string){
  if(id){
    this._service.deleteVendedor(id).subscribe(
      (res)=>{
       
        console.log(res)
         this.borrado=true;
      },
      (error)=>{
        
        console.log(error);
        this.borrado=false;
      }
    )
  }else{
    console.error("ID NO VALIDO")
  }
}

actualizarVendedor(){
  if(this.vendedorAEditar.id_vendedor){
    this._service.actualizarVendedor(this.vendedorAEditar.id_vendedor.toString(),this.vendedorAEditar).subscribe(
      (res)=>{  
        console.log("Vendedor Actualizado con extio",res)
        this.actualizado=true;
      },
      (error)=>{       
        console.error("Error al actualizar el vendedor",error);
        this.actualizado=false;
      }
    )
  }else{
    console.error("ID DE CLIENTE NO VALIDO")
  }
}




}
