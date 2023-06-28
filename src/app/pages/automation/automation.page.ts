import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.page.html',
  styleUrls: ['./automation.page.scss'],
})
export class AutomationPage implements OnInit {
  companyName: string = 'Just Enable';
  sections = [
    {
      title: 'GLOBAL.PROCESS_AUTOMATION',
      texts: [
        'GLOBAL.PROCESS_AUTOMATION_TEXT.0',
        'GLOBAL.PROCESS_AUTOMATION_TEXT.1',
        'GLOBAL.PROCESS_AUTOMATION_TEXT.2',
      ],
      bgColor: 'bg-white',
      image: '/assets/animation/robot-hand.json',
    },
    {
      title: 'GLOBAL.INDUSTRIAL_AUTOMATION',
      texts: [
        'GLOBAL.INDUSTRIAL_AUTOMATION_TEXT.0',
        'GLOBAL.INDUSTRIAL_AUTOMATION_TEXT.1',
        'GLOBAL.INDUSTRIAL_AUTOMATION_TEXT.2',
      ],
      bgColor: 'bg-gray-100',
      image: '/assets/animation/robot-head.json',
    },
    {
      title: 'GLOBAL.IT_INFRASTRUCTURE_AUTOMATION',
      texts: [
        'GLOBAL.IT_INFRASTRUCTURE_AUTOMATION_TEXT.0',
        'GLOBAL.IT_INFRASTRUCTURE_AUTOMATION_TEXT.1',
        'GLOBAL.IT_INFRASTRUCTURE_AUTOMATION_TEXT.2',
      ],
      bgColor: 'bg-white',

      image: '/assets/animation/coding.json',
    },
    {
      title: 'GLOBAL.DATA_INTEGRATION_AND_WORKFLOW_AUTOMATION_MANAGEMENT',
      texts: [
        'GLOBAL.DATA_INTEGRATION_AND_WORKFLOW_AUTOMATION_MANAGEMENT_TEXT.0',
        'GLOBAL.DATA_INTEGRATION_AND_WORKFLOW_AUTOMATION_MANAGEMENT_TEXT.1',
        'GLOBAL.DATA_INTEGRATION_AND_WORKFLOW_AUTOMATION_MANAGEMENT_TEXT.2',
      ],
      bgColor: 'bg-gray-100',
      image: '/assets/animation/culture.json',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
