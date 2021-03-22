import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [HomePageRoutingModule, SharedModule],
  declarations: [HomePage],
})
export class HomePageModule {}
