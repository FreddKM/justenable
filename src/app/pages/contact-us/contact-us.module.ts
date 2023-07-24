import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [ContactUsRoutingModule, SharedModule],
})
export class ContactUsModule {}
