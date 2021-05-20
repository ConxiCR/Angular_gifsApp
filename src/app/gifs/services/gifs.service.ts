import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    //almacenamiento APIKey de GIP
    private apiKey    : string = 'iBJWWU0yXxp296cgPWWgeQ7S7NTa7Zxf';
    //propiedad privada para almacenar los strings. La inicializo bacia
    private _historial:string[] = [];

  get historial(){

    //Le ponemos un spert para que no se modifique el arreglo original. Se hace rompiendo la referencia
    return [...this._historial];
  }
  //Función para insertar valores al nuevo historial. query=termino de busqueda. unshift para insertar al inicio
  buscarGifs(query:string){
      //
      query = query.trim().toLowerCase();
      //como evitar duplicados. Sino lo incluye, sino esta incluido anteriormente, lo insertamos si o si sino existe
      if( !this._historial.includes( query )){
        this._historial.unshift( query );
      }
      //cuando alguien acceda al historial corta la cantidad máxima de apuntes
      this._historial = this._historial.splice(0,10);
      console.log(this._historial);
  }

}
