// core modules
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// custom components
// import {} from '';
import { FetchApiDataService } from '../../services/fetch-api-data.service';
import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

// material modules
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatCard } from '@angular/material/card';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})

export class ProfileViewComponent implements OnInit {

  user: any = {};

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router,
  ) { }

  /**
   * When opening the component, gets the user
   */
  ngOnInit(): void {
    this.getUser();
  }

  /**
   * gets user details from backend
   */
  getUser(): void {
    let user = localStorage.getItem('Name');
    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.user = res;
    });
  }

  /**
   * opens a modal to edit the profile
   */
  openEditProfileDialog(): void{
    this.dialog.open(ProfileEditComponent, {
      width: '500px'
    })
  }



}