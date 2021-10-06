import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


//RxJS is a reactive programming library for JavaScript, and is used to combine multiple functions into a single function

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://myflix-lounge.herokuapp.com/';
// Get token from local storage for requests
const token = localStorage.getItem('token');
// Get username from localStorage for URLs
const username = localStorage.getItem('Name');

@Injectable({
  providedIn: 'root'
})
export class FetchApiDataService {
  constructor(private http: HttpClient) {}

  //registration class
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'users', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  //Login class
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(apiUrl + 'login', userDetails).pipe(
    catchError(this.handleError)
    );
  }
  // Get All Movies (private service)
  getAllMovies(): Observable<any> {
    return this.http.get(apiUrl + 'API/movies', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      )
  }
  // Get a single movie by Id (private service)
  getMovie(): Observable<any> {
    return this.http.get(apiUrl + 'API/movies/:Title', {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      )

  }
  // Get a director by name (private service)
  // getDirector(): Observable<any> {
  //   return this.http.get(apiUrl + 'movies/director/:name', {headers: new HttpHeaders(
  //     {
  //       Authorization: 'Bearer '+ token,
  //     }
  //   )}).pipe(
  //     map(this.extractResponseData),
  //     catchError(this.handleError)
  //   )
  // }
  // Get a genre by name (private service)
  // getGenre(): Observable<any> {
  //   return this.http.get(apiUrl + 'movies/genre/:name', {headers: new HttpHeaders(
  //     {
  //       Authorization: 'Bearer ' + token,
  //     }
  //   )}).pipe(
  //     map(this.extractResponseData),
  //     catchError(this.handleError)
  //   )
  // }
  // Get a User by username (private service)
  getUser(username: any): Observable<any> {
    return this.http.get(apiUrl + `users/${username}`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
    ) }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }
  // Get the favoritemovies-array of a user (private service)
  // getFavoriteMovies(): Observable<any> {
  //   return this.http.get(apiUrl + `users/${username}/favoritemovies`,
  //   {headers: new HttpHeaders(
  //     {
  //       Authorization: 'Bearer ' + token,
  //     }
  //   )}).pipe(
  //     map(this.extractResponseData),
  //     catchError(this.handleError)
  //   )
  // }
  // Add a movie to the favoritemovies-array (private service)
  postToFavoriteMovies(id : any): Observable<any> {
    return this.http.post(apiUrl + `users/${username}/Movies/${id}`,
    {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
    )}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }
  // Edit user profile (private service)
  EditUserProfile(): Observable<any> {
    return this.http.put(apiUrl + `users/${username}`,
    {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token, 
      }
      )}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      )
  }
  //Delete user profile (private service)
  DeleteUserProfile(): Observable<any> {
    return this.http.delete(apiUrl + `users/${username}`,
    {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
    )}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  }
  // Remove a movie from the favoritemovies-array (private service)
  removeFromFavoriteMovies(id : any): Observable<any> {
    return this.http.delete(apiUrl + `users/${username}/Movies/${id}`,
    {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      }
    )}).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    )
  } 
  // Non-typed response transaction
  private extractResponseData(res: Response | Object ): any {
    const body = res;
    return body || {};
  }
  //Handle Error
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
    } else {
    console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
    'Some error occurred; please try again later.'
    );
  }
}