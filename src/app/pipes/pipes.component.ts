import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // pipe Personalizado
  mensaje : string = 'este texto tiene aplicado un pipe personalizado que capitaliza todas las letras';
  // pipe Date
  fecha : Date = new Date()
  // pipe Currency
  precio : number = 1000;
  // pipe Decimal
  pi : number = Math.PI;
  // pipe Porcentaje
  factor : number = 0.7
}