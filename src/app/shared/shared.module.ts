import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
// import { SwiperModule } from 'swiper/angular'; // Make sure to import from 'swiper/angular'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    LottieModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    // SwiperModule,
  ],

  exports: [
    CommonModule,
    FormsModule,
    LottieModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
