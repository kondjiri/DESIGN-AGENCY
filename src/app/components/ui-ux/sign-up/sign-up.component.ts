import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {SignInComponent} from "../sign-in/sign-in.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  hide = false;
  editForm = this.fb.group({
    nom : new FormControl('',[Validators.required]),
    prenom : new FormControl('',[Validators.required]),
    email : new FormControl('',[Validators.email,Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl('',[Validators.min(8),Validators.required]),
    confirmerpassword : new FormControl('',[Validators.min(8),Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<SignUpComponent>,
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
  openConnexionDialog() {this.closeDialog()
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
