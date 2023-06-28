import { NgModule } from '@angular/core';

import { AutomationPageRoutingModule } from './automation-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { AutomationPage } from './automation.page';

@NgModule({
  imports: [AutomationPageRoutingModule, SharedModule],
  declarations: [AutomationPage],
})
export class AutomationPageModule {}
