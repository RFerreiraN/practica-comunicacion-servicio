import { Component, OnInit } from '@angular/core';
import { ServicioFamiliarService } from '../servicio-familiar.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit{

  nombreDePadre : string = 'Pedro';

  constructor(
    private _servicioFamiliar : ServicioFamiliarService
  ){}

  ngOnInit(){
    this._servicioFamiliar.setNombrePadre(this.nombreDePadre)
    this._servicioFamiliar.getNombrePadre()
  }

  saludar(){
    this._servicioFamiliar.saludar(this._servicioFamiliar.getNombreHijo())
  }

}
