import { Component } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  sections = [
    {
      title: 'GLOBAL.OUR_STORY',
      text: 'GLOBAL.OUR_STORY_TEXT',
      bgColor: ['from-gray-100', 'to-white'],
      image: '/assets/animation/our-story.json',
    },
    {
      title: 'GLOBAL.OUR_CULTURE',
      text: 'GLOBAL.OUR_CULTURE_TEXT',
      bgColor: ['from-white', 'to-gray-100', 'pt-24'],
      image: '/assets/animation/culture.json',
    },
    {
      title: 'GLOBAL.TECHNOLOGY',
      text: 'GLOBAL.TECHNOLOGY_TEXT',
      bgColor: ['from-gray-100', 'to-white'],
      image: '/assets/animation/technology.json',
    },
  ];

  constructor(private titleService: UtilsService) {
    this.titleService.setTitle('NAVIGATION.ABOUT_US');
  }
}
