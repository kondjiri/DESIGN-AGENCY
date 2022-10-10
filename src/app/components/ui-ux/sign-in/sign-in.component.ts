import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide = false;
  editForm = this.fb.group({
    email : new FormControl('',[Validators.email,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl('',[Validators.min(8),Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<SignInComponent>,
    protected fb : FormBuilder,
    private router: Router,
    protected dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  login() : void {
      console.log("------------- LOG IN ------------------");
      console.log(this.editForm.value)
  }

  openSignUpDialog() {this.closeDialog()
    const dialogRef = this.dialog.open(SignUpComponent, {
      width: '35%',
      data: null,
      panelClass: ['animate__animated','animate__slideInLeft']
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      window.console.log('*************** DIALOG CLOSED **************');
      window.console.log(result);
    });
  }
}
