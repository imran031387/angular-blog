import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menu/menu.service";
import {AppService} from "../services/app.service";
import {BlockService} from "../services/block/block.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu = [];
  block = [];
  constructor(private menuService: MenuService, private appService: AppService, private blockService: BlockService) { }

  ngOnInit() {
    this.menuService.getMenu('main').subscribe(res => {
      this.menu = res;
      console.log("Data Menu Recieved:::::", this.menu);
    }, err => {
      console.log(err);
      if(err.status == 403){
        this.appService.setNewToken();
      }
    });

  this.blockService.getBlock('basic','477844b2-a606-4fb5-88c5-7e2cd8c91069').subscribe(res => {
    this.block = res.data;
    console.log("Data Block Recieved:::::", this.block);
  }, err => {
    console.log(err);
    if(err.status == 403){
      this.appService.setNewToken();
    }
  });
  }
}
