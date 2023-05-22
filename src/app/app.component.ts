import { Component } from '@angular/core';
import { routes } from '../app/app.module'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})  

export class AppComponent {
  title = 'oxagon-test';
  routes = routes;

}
