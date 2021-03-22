import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { WorkPageRoutingModule } from './work-routing.module';
import { WorkPage } from './work.page';

@NgModule({
  imports: [SharedModule, WorkPageRoutingModule],
  declarations: [WorkPage],
})
export class WorkPageModule {}
