import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Categoria } from 'src/app/core/interfaces/categorias';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage{
  
  categoria: Categoria | undefined;

  constructor(
    private activatedRout: ActivatedRoute
  ) { 
    activatedRout.params.subscribe(params => {
      this.categoria = CATEGORIAS.find(categoria => categoria.nombre === params['nombre'] )
      console.log(params['nombre'])
})
  }
  }
 
    

