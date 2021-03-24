import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ClickElsewhereDirective } from './directives/click-elsewhere.directive';
import { UtilsService } from './services/utils.service';

const declarations = [FooterComponent, HeaderComponent, ClickElsewhereDirective];
const imports = [
  CommonModule,
  FormsModule,
  IonicModule,
  LottieModule,
  TranslateModule,
  HttpClientModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations,
  imports,
  exports: [...declarations, ...imports],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule,
      providers: [UtilsService],
    };
  }
}
