import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AutomationRoutingModule } from './automation-routing.module';
import { AutomationComponent } from './automation.component';

@NgModule({
  declarations: [AutomationComponent],
  imports: [AutomationRoutingModule, SharedModule],
})
export class AutomationModule {}
