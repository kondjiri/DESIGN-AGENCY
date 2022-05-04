import { Component, OnInit } from '@angular/core';


interface Service{
  _icon:string,
  title:string
  description:string
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  services1:Service[]=[
    {
      _icon:'tips_and_updates',
      title:'Innovation Ideas',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'integration_instructions',
      title:'Easy Integrations',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    }
  ]
  services2:Service[]=[
    {
      _icon:'biotech',
      title:'All frontend Technologies',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'people',
      title:"Teams's Ideas",
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
