import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Creamos el atributo que va a guardar el historial de etiquetas
  private _historialEtiquetas:string[]=[];

  // El getter del historial
  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  // Para agregar una nueva etiqueta al array
  buscarEtiqueta(etiqueta:string):void{
    // El metodo unshift va a insertar la etiqueta al principio del array
    this._historialEtiquetas.unshift(etiqueta);
  }
  constructor() { }
}
