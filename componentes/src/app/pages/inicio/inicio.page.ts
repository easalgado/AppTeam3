import { Component, OnInit } from '@angular/core';

interface componente {
  icon: string;
  name: string;
  redirectTo: string;


}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
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


  componentes: componente[] = [
    {
      icon:'people-outline',
      name:'contactos',
      redirectTo: '/contactos'
    },
    {
      icon:'newspaper-outline',
      name:'descripcion',
      redirectTo: '/descripcion'
    },
    {
      icon:'git-network-outline',
      name:'tabla-trabajo',
      redirectTo: '/tabla-trabajo'
    },
    {
      icon:'albums',
      name:'slides',
      redirectTo: '/slides'
    }





  ];







  constructor() { }

  ngOnInit() {
  }

}
