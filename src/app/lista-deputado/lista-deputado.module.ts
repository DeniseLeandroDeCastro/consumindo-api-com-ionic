import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDeputadoPageRoutingModule } from './lista-deputado-routing.module';

import { ListaDeputadoPage } from './lista-deputado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDeputadoPageRoutingModule
  ],
  declarations: [ListaDeputadoPage]
})
export class ListaDeputadoPageModule {}
