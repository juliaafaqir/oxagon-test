import { Component } from '@angular/core';
import { routes } from '../../app.module';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  routes = routes;
  itemImageUrl = "../../../assets/home-icon.svg";

}
