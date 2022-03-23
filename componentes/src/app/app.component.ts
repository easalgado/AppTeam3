import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slides = [
    {
     img: 'assets/img/M1.jpg',
     titulo: 'MATRICULATE YA <br>in UMH'
    },
    {
     img: 'assets/img/UMH1.JPG',
     titulo: 'SOMOS<br>UMH'
    },
    {
     img: 'assets/img/M1.jpg',
     titulo: 'UMH<br>TU INIVERSIDAD <BR> DE EXITO'
    },
   ]

}
