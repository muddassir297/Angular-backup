import { Component, OnInit, Input } from '@angular/core';
import { Global } from'../global';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css'],
  providers: [ CommonService]
})
export class ConfigurationComponent implements OnInit {

  menubar: {};
  configuartion = {"networkType":"","osVersion":"","snmpHostAddress":"","snmpString":""};
  
  constructor(private commonService: CommonService, private global: Global) { 
    this.menubar = global.menubar
  }

  ngOnInit() {
    this.configuartion.networkType = 'Legacy'
  }

}
