import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { ConfigurationComponent }   from './configuration/configuration.component';
import { ReportComponent }   from './report/report.component';
import { LoginComponent }   from './login/login.component';
import { DevicemanagementComponent }   from './devicemanagement/devicemanagement.component';
import { IpmanagementComponent }   from './ipmanagement/ipmanagement.component';
import { GlobalListMgmtComponent }   from './global-list-mgmt/global-list-mgmt.component';
import { TemplateAdminMgmtComponent }   from './template-admin-mgmt/template-admin-mgmt.component';
import { CreateconfigComponent } from './createconfig/createconfig.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'create', component: CreateconfigComponent },
  { path: 'report', component: ReportComponent },
  { path: 'devicemanagement', component: DevicemanagementComponent },
  { path: 'ipmanagement', component: IpmanagementComponent },
  { path: 'requestdetails', component: RequestdetailsComponent },
  { path: 'global-list-mgmt', component: GlobalListMgmtComponent },
  { path: 'template-admin-mgmt', component: TemplateAdminMgmtComponent },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  
  exports: [ RouterModule ]
})

export class AppRoutingModule { }