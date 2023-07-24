import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
import { ClickElsewhereDirective } from '../directives/click-elsewhere.directive';
import { GoogleMapsModule } from '@angular/google-maps';
// import { SwiperModule } from 'swiper/angular'; // Make sure to import from 'swiper/angular'

@NgModule({
  declarations: [ClickElsewhereDirective],
  imports: [
    CommonModule,
    FormsModule,
    LottieModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    LottieModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ClickElsewhereDirective,
    GoogleMapsModule,
    HttpClientJsonpModule,
  ],
})
export class SharedModule {}
