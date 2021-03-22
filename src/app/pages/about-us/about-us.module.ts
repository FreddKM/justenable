import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsPageRoutingModule } from './about-us-routing.module';
import { AboutUsPage } from './about-us.page';

@NgModule({
  imports: [AboutUsPageRoutingModule, SharedModule],
  declarations: [AboutUsPage],
})
export class AboutUsPageModule {}
