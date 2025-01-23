import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // Inyectamos
  constructor(private gifsService:GifsService){}

  get historial(){
    return this.gifsService.historialEtiquetas;
  }
// Método para buscar GIFs usando una etiqueta del historial
buscarEtiqueta(etiqueta: string): void {
  this.gifsService.buscarEtiqueta(etiqueta);
}
}
