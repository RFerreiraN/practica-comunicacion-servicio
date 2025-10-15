import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit{

  nombreDeHijo : string = 'Juan';
  mensajeAPadre : string = '';

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}

  ngOnInit(){
    this._servicioFamiliar.setNombreHijo( this.nombreDeHijo)
    this._servicioFamiliar.getNombreHijo()
  }

  saludar(){
   return this._servicioFamiliar.saludar(this._servicioFamiliar.getNombrePadre())
  }
}
