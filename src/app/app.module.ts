// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './components/user-login-form/user-login-form.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { GenreCardComponent } from './components/genre-card/genre-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { DirectorCardComponent } from './components/director-card/director-card.component';
import { SynopsisCardComponent } from './components/synopsis-card/synopsis-card.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';

// Angular visual modules
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Design modules
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';




const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'users', component: ProfileViewComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix'},
];


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    ProfileViewComponent,
    NavbarComponent,
    FavoritesComponent,
    GenreCardComponent,
    DirectorCardComponent,
    SynopsisCardComponent,
    ProfileEditComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }