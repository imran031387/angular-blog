import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { WorksComponent } from './works/works.component';
import {AppService} from "./services/app.service";
import {NodeService} from "./services/node/node.service";
import {HttpModule} from "@angular/http";
import {MenuService} from "./services/menu/menu.service";
import {BlockService} from "./services/block/block.service";


const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    BannerComponent,
    BlogListComponent,
    WorksComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [
    AppService,
    NodeService,
    MenuService,
    BlockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
