import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';

@NgModule({
  declarations: [MaintenanceComponent],
  imports: [MaintenanceRoutingModule, SharedModule],
})
export class MaintenanceModule {}
