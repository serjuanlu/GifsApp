import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!:ElementRef<HTMLInputElement>;
  // Indicamos que es opcional con ! para que no haya error

  constructor(private gifsService:GifsService){}
  // METODO SIN VIEWCHILD
  // buscarEtiqueta(nuevaEtiqueta: string){
  //   console.log({nuevaEtiqueta});
  // }

  // CON VIEWCHILD
  buscarEtiqueta(){
    const nuevaEtiqueta=this.inputEtiqueta.nativeElement.value;
    // llamamos al metodo del servicio para guardar ahi la etiqueta
    this.gifsService.buscarEtiqueta(nuevaEtiqueta);
    // EL console log ya no lo necesitamos
    // console.log({nuevaEtiqueta});

    // Para limpiar el input, no se va a mandar porque no pulsamos el intro
    this.inputEtiqueta.nativeElement.value="";
  }

}
