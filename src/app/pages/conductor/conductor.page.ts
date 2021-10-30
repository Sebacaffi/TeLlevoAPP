import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})

export class ConductorPage implements OnInit {

datos:any

  constructor(private router:Router, public alertController: AlertController) {}

  ngOnInit() {
  }

  navegar(page){
    this.router.navigate(page);
  }
  
  async salirSesion(){
    const alert = await this.alertController.create({
      message: '¿Seguro deseas salir?',
      buttons: [{
        text: 'Cancelar'
      },{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/login']);}
      }]
    });
    await alert.present();
  }

  async generaViaje(){
    const alert = await this.alertController.create({
      message: 'Valor viaje $1.500 / 18:00 hrs',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/home']);}
      }]
    });
    await alert.present();
  }
}
