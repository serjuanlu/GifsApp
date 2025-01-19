import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  // Creamos el atributo que va a guardar el historial de etiquetas
  private _historialEtiquetas: string[] = [];

  // El getter del historial
  get historialEtiquetas() {
    return [...this._historialEtiquetas];
  }



  // Para agregar una nueva etiqueta al array
  buscarEtiqueta(etiqueta: string): void {
    // Vaciamos la cadena de espacios
    etiqueta = etiqueta.trim();
    // Si la longitud es 0, no se va a guardar
    if (etiqueta.length === 0) {
      console.warn('La etiqueta esta vacia, no se va a agregar');
      return;
    }
    // Comprobamos si es minuscula,
    this._historialEtiquetas = this._historialEtiquetas.filter(
      (etiquetaGuardada) =>
        etiquetaGuardada.toLowerCase() !== etiqueta.toLowerCase()
    );
    // Metemos la etiqueta al principio
    this._historialEtiquetas.unshift(etiqueta);
    // Y si hubiese 10 o mas, las sacamos
    if (this._historialEtiquetas.length > 10) {
      this._historialEtiquetas.pop();
    }
  }

  constructor() { }
}
