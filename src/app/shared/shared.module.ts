import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LottieModule } from 'ngx-lottie';
import { ClickElsewhereDirective } from '../directives/click-elsewhere.directive';

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
    HttpClientJsonpModule,
  ],
})
export class SharedModule {}
