import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
