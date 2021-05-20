import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  //viewChild va a buscar en html la referencia local
  //en el elemento txtBuscar le aplicamos !(node null assertion operator) aseguramos que el objeto no es nulo
  //llamamos la información del input
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService:GifsService){

  }

  //obtener información de la caja de texto y borrar el valor del contenido
  //KeyboardEvent:tipado
  //buscar(event:KeyboardEvent){
    //console.log(event);
  //}
  buscar(){
    //console.log(this.txtBuscar);
    //queremos coger la informacion de la caja de texto y vaciarla
    const valor = this.txtBuscar.nativeElement.value;
    //para evitar que se graben vacios. trim(para que no deje espacios en blanco). 
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs( valor );
    //Una vez nos lo enseña en consola, lo borra
    this.txtBuscar.nativeElement.value = '';
  }

}
