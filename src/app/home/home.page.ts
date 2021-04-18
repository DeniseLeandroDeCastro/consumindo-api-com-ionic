import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo = 'Câmara dos Deputados';

  constructor(
    public navCtrl: NavController,
    private router: Router) {
  }

  btnClicked() {
    console.log("btn Clicked");
    this.router.navigate(['lista-deputado'])
  }

}
