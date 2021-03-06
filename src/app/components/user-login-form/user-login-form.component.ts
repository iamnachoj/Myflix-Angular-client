// src/app/user-login-form/user-login-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../../services/fetch-api-data.service';
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
// Router
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Name: '', Password: ''};

constructor(
    public router: Router,
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar) { }

ngOnInit(): void {}

// This is the function responsible for sending the form inputs to the backend
loginUser(): void {
      this.fetchApiData.userLogin(this.userData).subscribe((result) => {
        localStorage.setItem('Name', result.user.Name);
        localStorage.setItem('token', result.token);
      this.dialogRef.close(); // This will close the modal on success!
      this.snackBar.open(result, 'OK', {
          duration: 2000
      });
      this.router.navigate(['movies']);
      setTimeout(() => location.reload(), 1000);
      }, (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
      });
    }
  }