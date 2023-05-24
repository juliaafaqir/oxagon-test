import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations' 


import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MainComponent } from './components/main/main.component';
import { ButtonComponent } from './components/button/button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { IconCardComponent } from './components/icon-card/icon-card.component';
import { RulechainsComponent } from './components/rulechains/rulechains.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AssetsComponent } from './components/assets/assets.component';
import { DeviceManagementComponent } from './components/device-management/device-management.component';
import { EdgeManagementComponent } from './components/edge-management/edge-management.component';
import { EntityViewComponent } from './components/entity-view/entity-view.component';
import { DashboardManagementComponent } from './components/dashboard-management/dashboard-management.component';
import { AuditComponent } from './components/audit/audit.component';
import { VersionControlComponent } from './components/version-control/version-control.component';
import { SystemSettingsComponent } from './components/system-settings/system-settings.component';
import { HomeComponent } from './components/home/home.component';


export const routes =  [
  { path: 'home', component: HomeComponent, label: 'Home' },
  { path: 'rulechains', component: RulechainsComponent, label: 'Rule Chains' },
  { path: 'customers', component: CustomersComponent, label: 'Customers' },
  { path: 'assets', component: AssetsComponent, label: 'Assets' },
  { path: 'device-management', component: DeviceManagementComponent, label: 'Device Management' },
  { path: 'edge-management', component: EdgeManagementComponent, label: 'Edge Management' },
  { path: 'entity-view', component: EntityViewComponent, label: 'Entity View' },
  { path: 'dashboard-management', component: DashboardManagementComponent, label: 'Dashboard Management' },
  { path: 'audit', component: AuditComponent, label: 'Audit' },
  { path: 'version-control', component: VersionControlComponent, label: 'Version Control' },
  { path: 'system-settings', component: SystemSettingsComponent, label: 'System Settings' },
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
    CustomersComponent,
    AssetsComponent,
    DeviceManagementComponent,
    EdgeManagementComponent,
    EntityViewComponent,
    DashboardManagementComponent,
    AuditComponent,
    VersionControlComponent,
    SystemSettingsComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    RouterModule.forRoot(routes),
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
