// Core modules
import { Component, OnInit, Input } from '@angular/core';

// components
import { FetchApiDataService } from '../../services/fetch-api-data.service';

// Material modules
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  /**
   * Required fields for the update user form
   */
  @Input() userData = { 
    Name: '', 
    Password: '', 
    Email: '', 
    Birthday: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<ProfileEditComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  /**
   * update user details
   */
  editProfile(): void {
    this.fetchApiData.EditUserProfile(this.userData).subscribe((res) => {
      // Logic for successful user registration needs to be implemented here!
      this.dialogRef.close();
      localStorage.setItem('Name', res.Name)
      console.log(res)
      this.snackBar.open(this.userData.Name, 'Successfully updated user details!', {
        duration: 3000
      });
    }, (res) => {
      this.snackBar.open(res, 'OK', {
        duration: 3000
      });
      setTimeout(function () {
        window.location.reload();
       }, 3500);
      })}
}