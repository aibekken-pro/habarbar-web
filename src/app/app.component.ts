import { Component } from '@angular/core';
import { CoreModule } from './core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.scss'],
  imports: [CoreModule],
  template: '<app-main-layout></app-main-layout>',
})
export class AppComponent {
}
