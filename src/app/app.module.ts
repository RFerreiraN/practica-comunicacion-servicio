import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EstiloHermanosDirective } from './estilo-hermanos.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    HijoComponent,
    DirectivasComponent,
    EstiloHermanosDirective,
    PipesComponent,
    MiPipePersonalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
