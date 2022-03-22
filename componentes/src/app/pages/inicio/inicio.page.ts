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
