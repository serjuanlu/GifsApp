import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  // El listado de Gifs
  public listadoGifs : Gif[]=[];

  private serviceUrl:string='https://api.giphy.com/v1/gifs';
  private apiKey:string='lkYPzpFpWFU7nPsLD2jcrbeLP5fenx4C';


  // Creamos el atributo que va a guardar el historial de etiquetas
  private _historialEtiquetas: string[] = [];
  // el codigo de la api de gifs de giphy

  // Inyectamos HttpClient
  constructor(private http: HttpClient) {

   }

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
    // llamada a organizar el historial
    this.organizarHistorial(etiqueta);

    // Vamos a formatear la busqueda
    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit',10)
    .set('q', etiqueta);

    // La busqueda de los gifs
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params}).subscribe(resp=>{
      this.listadoGifs=resp.data;
      console.log({gifs:this.listadoGifs});
    });
  }

  organizarHistorial(etiqueta:string):void{
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

}
