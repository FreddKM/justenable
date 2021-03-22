import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
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
      // bgColor: ['from-orange-500', 'to-amber-500', 'text-white'],
      bgColor: ['from-white', 'to-gray-100', 'pt-24'],
      image: '/assets/animation/culture.json',
    },
    {
      title: 'GLOBAL.TECHNOLOGY',
      text: 'GLOBAL.TECHNOLOGY_TEXT',
      // bgColor: ['from-gray-50', 'to-gray-100'],
      bgColor: ['from-gray-100', 'to-white'],

      image: '/assets/animation/technology.json',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
