import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    constructor( private http:HttpClient ){}

  //Función para insertar valores al nuevo historial. query=termino de busqueda. unshift para insertar al inicio
  buscarGifs(query:string){
      //
      query = query.trim().toLowerCase();
      //como evitar duplicados. Sino lo incluye, sino esta incluido anteriormente, lo insertamos si o si sino existe
      if( !this._historial.includes( query )){
        this._historial.unshift( query ); 
        this._historial = this._historial.splice(0,10);
      }
      //las peticiones http(modulo) retornan los observables para que nos envie una respuesta de tipo get/post/delete/etc
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key=iBJWWU0yXxp296cgPWWgeQ7S7NTa7Zxf&q=dragon Ball z&limit=10')
          .subscribe( (resp:any) => {
            console.log(resp.data);
          });
      //cuando alguien acceda al historial corta la cantidad máxima de apuntes
      //console.log(this._historial);
      //llamada a la APi de la plataforma GIPHY y utilizando Postman. Una opción serian las promesas
      //fetch('https://api.giphy.com/v1/gifs/search?api_key=iBJWWU0yXxp296cgPWWgeQ7S7NTa7Zxf&q=dragon Ball z&limit=10')
      //  .then( resp => {
      //    resp.json().then(data=>{
      //      console.log(data);
      //    })
      // })
      // 2a opción 

      
  }

}
