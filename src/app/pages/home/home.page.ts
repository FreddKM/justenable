import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  options: AnimationOptions = {
    path: '/assets/animation/coding.json',
  };

  constructor(private titleService: UtilsService) {
    this.titleService.setTitle('NAVIGATION.HOME');

  }

}
