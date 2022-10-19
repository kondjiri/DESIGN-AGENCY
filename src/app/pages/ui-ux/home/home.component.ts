import { Component, OnInit } from '@angular/core';
import {SignInComponent} from "../../../components/ui-ux/sign-in/sign-in.component";
import {MatDialog} from "@angular/material/dialog";
import {SignUpComponent} from "../../../components/ui-ux/sign-up/sign-up.component";


interface Service{
  _icon:string,
  title:string
  description:string
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss','../../../components/ui-ux/sign-in/sign-in.component.scss']
})
export class HomeComponent implements OnInit {



  logos: any[] = [
    'assets/icons/angular.png',
    'assets/icons/laravel.png',
    'assets/icons/reactjs.png',
    'assets/icons/symphony.png',
    'assets/icons/html_css_bootstrap.png',
    'assets/icons/small_logo.png',
    'assets/icons/AgimMo_logo.png',
  ];

  jobs: Service[] = [
    {
      _icon:'tips_and_updates',
      title:'Innovation Ideas',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
    {
      _icon:'integration_instructions',
      title:'Easy Integrations',
      description:'Google Fonts is a library of 1,405 open source font families and APIs for'
    },
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
  constructor(
    protected dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openConnexionDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '500px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      window.console.log('*************** DIALOG CLOSED **************');
      window.console.log(result);
    });
  }

  openSignUpDialog() {
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '500px',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      window.console.log('*************** DIALOG CLOSED **************');
      window.console.log(result);
    });
  }

}
