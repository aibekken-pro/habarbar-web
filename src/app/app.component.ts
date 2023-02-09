import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-app',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
}
