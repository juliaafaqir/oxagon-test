import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';


import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { RulechainsComponent } from './components/rulechains/rulechains.component';
import { CustomersComponent } from './components/customers/customers.component';


export const routes =  [
  { path: 'home', component: MainComponent, label: 'Home' },
  { path: 'rulechains', component: RulechainsComponent, label: 'Rule Chains' },
  { path: 'customers', component: CustomersComponent, label: 'Customers' }
 ];
@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    MainComponent,
    ButtonComponent,
    SearchBarComponent,
    IconCardComponent,
    RulechainsComponent,
    CustomersComponent
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    RouterModule.forRoot(routes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
