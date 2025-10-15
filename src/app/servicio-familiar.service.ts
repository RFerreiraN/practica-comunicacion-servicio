import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioFamiliarService {

  nombrePadre : string = '';
  nombreHijo : string = '';
  

  setNombrePadre( nombre : string){
      this.nombrePadre = nombre
  }

  getNombrePadre(){
    return this.nombrePadre
  }

  setNombreHijo( nombre : string ){
    this.nombreHijo = nombre
  }

  getNombreHijo(){
    return this.nombreHijo
  }

  saludar( nombre : string){
      console.log(`Hola ${ nombre }`)
  }

  constructor() { }
}
