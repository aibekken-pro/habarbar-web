import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroModule } from './modules/ng-zorro.module';

@NgModule({
  imports: [
    CommonModule,
    NgZorroModule,
  ],
  exports: [
    CommonModule,
    NgZorroModule,
  ],
})

export class SharedModule { }
