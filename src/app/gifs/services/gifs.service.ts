import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    //propiedad privada para almacenar los strings. La inicializo bacia
    private _historial:string[] = [];

  get historial(){
    //Le ponemos un spert para que no se modifique el arreglo original. Se hace rompiendo la referencia
    return [...this._historial];
  }
  //Función para insertar valores al nuevo historial. query=termino de busqueda. unshift para insertar al inicio
  buscarGifs(query:string){
      this._historial.unshift( query );
      console.log(this._historial);
  }

}
