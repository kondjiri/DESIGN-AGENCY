import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product!: string

  constructor(
    private router : ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.product = params['product'];
      if (this.product){
        console.log("------ PRODUCT --------")
        console.log(this.product)
      }
    });
  }

}
