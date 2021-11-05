import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DataService } from '../../services/data.service';

import { Respuesta, Viaje } from 'src/app/interfaces/viaje-interface';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  viaje: Viaje[] = [];

  constructor(private router:Router, public alertController: AlertController, private dataService: DataService) { }

  //Cargar el dato de la API al crear la PAGE de PASAJERO
  ngOnInit() {
    
    this.dataService.getAPI().subscribe(resp =>
      {
        console.log(resp);
        this.viaje.push(...resp.viaje);
      })
    //this.datos = this.dataService.getAPI();
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
        handler: () => {this.router.navigate(['/login']);
        localStorage.removeItem("ingresado");}
      }]
    });
    await alert.present();
  }

  async reservarViaje(){
    const alert = await this.alertController.create({
      message: 'Su viaje fue reservado con exito',
      buttons: [{
        text: 'Aceptar',
        handler: () => {this.router.navigate(['/home']);}
      }]
    });
    await alert.present();
  }
}
