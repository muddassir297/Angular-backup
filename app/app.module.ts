import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { Global } from './global';
/*import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';*/
import {A2Edatetimepicker} from 'ng2-eonasdan-datetimepicker';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';

import { OrderModule } from 'ngx-order-pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ReportComponent } from './report/report.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { ChartModule } from 'angular-highcharts';
import { DevicemanagementComponent } from './devicemanagement/devicemanagement.component';
import { IpmanagementComponent } from './ipmanagement/ipmanagement.component';
import { GlobalListMgmtComponent } from './global-list-mgmt/global-list-mgmt.component';
import { TemplateAdminMgmtComponent } from './template-admin-mgmt/template-admin-mgmt.component';
import { CreateconfigComponent } from './createconfig/createconfig.component';
import { FooterComponent } from './footer/footer.component';
import { RequestdetailsComponent } from './requestdetails/requestdetails.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  imports: [
    BrowserModule,
    OrderModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    A2Edatetimepicker,
    ChartModule   // add ChartModule to your imports
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )*/
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    ConfigurationComponent,
    ReportComponent,
    LoginComponent,
    DevicemanagementComponent,
    IpmanagementComponent,
    GlobalListMgmtComponent,
    TemplateAdminMgmtComponent,
    CreateconfigComponent,
    FooterComponent,
    RequestdetailsComponent,
    ScheduleComponent,
    
  ],
  providers: [ 
    Global
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
