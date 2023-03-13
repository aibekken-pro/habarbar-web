import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { FormsModule } from '@angular/forms';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

const NzModules = [
  NzLayoutModule,
  NzBreadCrumbModule,
  NzMenuModule,
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  NzGridModule,
  NzTypographyModule,
  NzSwitchModule,
  NzRadioModule,
  FormsModule,
  NzSpaceModule,
  NzTreeSelectModule,
];

@NgModule({
  imports: [
    ...NzModules,
  ],
  exports: [
    ...NzModules,
  ],
})

export class NgZorroModule { }
