import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {
 //Como hemos injectado el servicio podemos crear una nueva propiedad get. para optener el historial y conectarlo con el servicio
  //necesitamos el historial creado en gifsService.ts
 get historial(){
    return this.gifsService.historial;
  }
  //injectamos el servicio. se importa
  constructor( private gifsService:GifsService) { }

//función para que al hacer click en el boton aparezcan las imágenes cada vez que se pulse
  buscar( termino: string ){
    this.gifsService.buscarGifs( termino )
  }

  

}
