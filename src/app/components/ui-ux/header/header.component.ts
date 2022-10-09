import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignInComponent} from "../sign-in/sign-in.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    protected dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openConnexionDialog() {
    const dialogRef = this.dialog.open(SignInComponent, {
      width: '35%',
      data: null,
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      window.console.log('*************** DIALOG CLOSED **************');
      window.console.log(result);
    });
  }

}
