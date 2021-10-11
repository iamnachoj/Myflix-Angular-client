import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
/**
 * App main component
 */
export class AppComponent {
  /**
   * data binding for title
   * @type {string}
   */
  title = 'myFlix-Angular-client';
}