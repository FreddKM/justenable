import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServicesPageRoutingModule } from './services-routing.module';
import { ServicesPage } from './services.page';

@NgModule({
  imports: [SharedModule, ServicesPageRoutingModule],
  declarations: [ServicesPage],
})
export class ServicesPageModule {}
