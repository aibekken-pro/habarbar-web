import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared-lib/shared.module';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './layouts/home-page/home-page.component';

import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomePageComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [MainLayoutComponent],
})
export class CoreModule { }
