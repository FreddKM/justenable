import { NgModule } from '@angular/core';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [AboutUsRoutingModule, SharedModule],
})
export class AboutUsModule {}
