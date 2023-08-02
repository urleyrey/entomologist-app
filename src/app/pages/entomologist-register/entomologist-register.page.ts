import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-entomologist-register',
  templateUrl: './entomologist-register.page.html',
  styleUrls: ['./entomologist-register.page.scss'],
})
export class EntomologistRegisterPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  gotoPage(ruta:string){
    if(ruta=='upload'){
      this.navCtrl.navigateForward('entomologist-photo');
    }
    if(ruta=='count'){
      this.navCtrl.navigateForward('count');
    }
  }

}
