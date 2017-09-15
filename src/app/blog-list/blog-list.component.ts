import { Component, OnInit } from '@angular/core';
import {NodeService} from "../services/node/node.service";
import {AppService} from "../services/app.service";

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts = [];
  constructor(private blogService: NodeService, private appService: AppService ) { }

  ngOnInit() {
      this.blogService.getAllNodes('article').subscribe(res => {
          this.posts = res.data;
      console.log("Data Blog Recieved:::::", this.posts);
    }, err => {
          console.log(err);
          if(err.status == 403){
            this.appService.setNewToken();
          }
    });
  }
}
