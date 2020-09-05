import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 slides = [
   {
     img: 'assets/img/mujer.svg',
     titulo: 'Una aplicacion hecha<br>para ti' 
   },
   {
    img: 'assets/img/pastel.svg',
    titulo: 'Obeten exelentes<br>beneficios' 
  },
  {
    img: 'assets/img/dinero.svg',
    titulo: 'Suscripción muy<br>cómoda' 
  }
 ]
}

