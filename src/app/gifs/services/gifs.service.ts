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
    // Vaciamos la cadena de espacios
    etiqueta=etiqueta.trim();
    // Si la longitud es 0, no se va a guardar
    if(etiqueta.length===0){
      window.alert('La cadena esta vacia');
      return;
    }
    // Llamamos al metodo de validar la etiqueta, que va a devolver una etiqueta
    etiqueta=this.validarEtiqueta(etiqueta);
    this._historialEtiquetas.unshift(etiqueta);
  }

  // Metodo que hace las validaciones de las etiquetas
  validarEtiqueta(etiqueta:string):string{
       // Lo pasamos a minuscula
       etiqueta=etiqueta.toLowerCase();
       // El metodo unshift va a insertar la etiqueta al principio del array
       if(this._historialEtiquetas.includes(etiqueta)){
        window.alert(`${etiqueta} ya esta en la lista`);
         // Igualamos el array de etiquetas al array filtrado sin la etiqueta repetida
         this._historialEtiquetas=this.historialEtiquetas.filter((etiquetas)=>etiquetas!=etiqueta);
       }
       if(this._historialEtiquetas.length>=10){
         this.historialEtiquetas.pop();
       }
       return etiqueta;
  }
  constructor() { }
}
