import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDeputadoPage } from './lista-deputado.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeputadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDeputadoPageRoutingModule {}
