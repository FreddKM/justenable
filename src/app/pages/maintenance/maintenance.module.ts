import { NgModule } from '@angular/core';

import { MaintenancePageRoutingModule } from './maintenance-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaintenancePage } from './maintenance.page';

@NgModule({
  imports: [SharedModule, MaintenancePageRoutingModule],
  declarations: [MaintenancePage],
})
export class MaintenancePageModule {}
