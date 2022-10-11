import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


interface Service{
  _icon:string,
  _src:string,
  title:string
  description:string
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productName!: string

  jobs: Service[] = [
    {
      _icon:'assets/images/bg-02.png',
      _src:'assets/icons/angular.png',
      title:'Innovation Ideas',
      description:'Google Fonts is a Google FontsFontsFontsFonts is a library of 1,405 open source font families and APIs for, library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/bg-01.png',
      _src:'assets/icons/reactjs.png',
      title:'Easy Integrations',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/bg-03.png',
      _src:'assets/icons/AgimMo_logo.png',
      title:'All frontend Technologies',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for, 405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/bg-04.png',
      _src:'assets/icons/illustrator.png',
      title:"Teams's Ideas",
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/bg-05.png',
      _src:'assets/icons/laravel.png',
      title:'Time to save our time',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/001.png',
      _src:'assets/icons/photoshop.png',
      title:'Working remotely',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/002.png',
      _src:'assets/icons/premiere_pro.png',
      title:'Digital Agency',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'assets/images/004.png',
      _src:'assets/icons/symphony.png',
      title:"New Leading Technologies",
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    }
  ]

  constructor(
    private router : ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.productName = params['product'];
      if (this.productName){
        console.log("------ PRODUCT --------")
        console.log(this.productName)
      }
    });
  }

  truncate(description: string) {
    if (description.length>150){
      return description.substring(0,150)+'...'
    }
    return description;
  }
}
