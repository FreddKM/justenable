import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { UtilsService } from 'src/app/services/utils.service';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  options: AnimationOptions = {
    path: '/assets/animation/coding.json',
  };

  services: any = [
    {
      title: 'DESIGN_ENGINEERING',
      description: 'DESIGN_ENGINEERING',
      coverImage: 'assets/img/design engineering.webp',
    },
    {
      title: 'SOFTWARE_ENGINEERING',
      description: 'SOFTWARE_ENGINEERING',
      coverImage: 'assets/img/Software Engineering.png',
    },
    {
      title: 'PROJECT_MANAGEMENT',
      description: 'PROJECT_MANAGEMENT',
      coverImage: 'assets/img/Project Management.gif',
    },
    {
      title: 'MAINTENANCE_AND_GENERAL_WORK',
      description: 'MAINTENANCE_AND_GENERAL_WORK',
      coverImage: 'assets/img/Maintenance and general work.jpeg',
    },
  ];

  industries: any = [
    {
      name: 'FMCG',
    },
    {
      name: 'PET',
    },
    {
      name: 'MINING',
    },
    {
      name: 'OIL_AND_GAS',
    },
  ];

  constructor(private titleService: UtilsService) {
    this.titleService.setTitle('NAVIGATION.HOME');
  }

  ngAfterViewInit(): void {
    register();
  }
}
