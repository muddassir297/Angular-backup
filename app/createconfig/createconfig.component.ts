import { Component, OnInit, Input } from '@angular/core';
import { Global } from'../global';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-createconfig',
  templateUrl: './createconfig.component.html',
  styleUrls: ['./createconfig.component.css'],
  providers: [ CommonService]
})
export class CreateconfigComponent implements OnInit {
  menubar: {};
  constructor(private commonService: CommonService, private global: Global) { 
    this.menubar = global.menubar
  }

  ngOnInit() {
    this.makeMeActive('Configuration');
  }

  makeMeActive = function(key){
    this.activetab =this.commonService.activeTabs(key, this.menubar);
    this.menubar = this.activetab
  }

}
