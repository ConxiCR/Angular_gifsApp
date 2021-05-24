import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
    //almacenamiento APIKey de GIP
    private apiKey    : string = 'iBJWWU0yXxp296cgPWWgeQ7S7NTa7Zxf';
    //propiedad privada para almacenar los strings. La inicializo bacia
    private _historial:string[] = [];

    //propiedad para almacenar la data de forma publica
    //cambiamos el any, ya que ahora si tenemos tipado. Será un arreglo de GIF
    public resultados: Gif[] = [];

  get historial(){

    //Le ponemos un spert para que no se modifique el arreglo original. Se hace rompiendo la referencia
    return [...this._historial];
  }
    //se va a ejecutar la primera vez que el servicio se llame una vez. Por lo que es el mejor sitio para ejecutar el localstorage
    constructor( private http:HttpClient ){
      //al borrar del localstorage la información lo borra todo porque le estoy enviando un arreglo bacio
      this._historial = JSON.parse (localStorage.getItem( 'historial' )!) || []
      //if(localStorage.getItem('historial')){
        //this._historial = JSON.parse( localStorage.getItem('historial')!);
      //}
    }

  //Función para insertar valores al nuevo historial. query=termino de busqueda. unshift para insertar al inicio
  buscarGifs(query:string){
      //
      query = query.trim().toLowerCase();
      //como evitar duplicados. Sino lo incluye, sino esta incluido anteriormente, lo insertamos si o si sino existe
      if( !this._historial.includes( query )){
        this._historial.unshift( query ); 
        this._historial = this._historial.splice(0,10);
        //localstorage. Como grabar. Nos dará el objeto como un arreglo
        localStorage.setItem( 'historial', JSON.stringify(this._historial));

      }
      //las peticiones http(modulo) retornan los observables para que nos envie una respuesta de tipo get/post/delete/etc
      //cambiamos las '' por badticks `` para poder incluir código en la dirección de la API. Queremos buscar el query
      this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=iBJWWU0yXxp296cgPWWgeQ7S7NTa7Zxf&q=${ query } z&limit=10`)
          .subscribe( ( resp ) => {
            console.log(resp.data);
            //dentro de la respuesta viene la data
            this.resultados = resp.data;
            //typescript ayuda con el tipado
            resp.data[0].images.downsized_medium.url;
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
