import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {
  companyName: string = 'Just Enable';
  sections = [
    {
      title: 'GLOBAL.PREVENTIVE_MAINTENANCE',
      texts: [
        'GLOBAL.PREVENTIVE_MAINTENANCE_TEXT.0',
        'GLOBAL.PREVENTIVE_MAINTENANCE_TEXT.1',
        'GLOBAL.PREVENTIVE_MAINTENANCE_TEXT.2',
      ],
      bgColor: 'bg-white',
      image: '/assets/animation/robot-hand.json',
    },
    {
      title: 'GLOBAL.CORRECTIVE_MAINTENANCE',
      texts: [
        'GLOBAL.CORRECTIVE_MAINTENANCE_TEXT.0',
        'GLOBAL.CORRECTIVE_MAINTENANCE_TEXT.1',
        'GLOBAL.CORRECTIVE_MAINTENANCE_TEXT.2',
      ],
      bgColor: 'bg-gray-100',
      image: '/assets/animation/robot-head.json',
    },
    {
      title: 'GLOBAL.PREDICTIVE_MAINTENANCE',
      texts: [
        'GLOBAL.PREDICTIVE_MAINTENANCE_TEXT.0',
        'GLOBAL.PREDICTIVE_MAINTENANCE_TEXT.1',
        'GLOBAL.PREDICTIVE_MAINTENANCE_TEXT.2',
        'GLOBAL.PREDICTIVE_MAINTENANCE_TEXT.3',
      ],
      bgColor: 'bg-white',

      image: '/assets/animation/coding.json',
    },
    {
      title: 'GLOBAL.ASSET_MANAGEMENT',
      texts: [
        'GLOBAL.ASSET_MANAGEMENT_TEXT.0',
        'GLOBAL.ASSET_MANAGEMENT_TEXT.1',
        'GLOBAL.ASSET_MANAGEMENT_TEXT.2',
      ],
      bgColor: 'bg-gray-100',
      image: '/assets/animation/culture.json',
    },
    {
      title: 'GLOBAL.FACILITY_MAINTENACE',
      texts: [
        'GLOBAL.FACILITY_MAINTENACE_TEXT.0',
        'GLOBAL.FACILITY_MAINTENACE_TEXT.1',
        'GLOBAL.FACILITY_MAINTENACE_TEXT.2',
      ],
      bgColor: 'bg-white',

      image: '/assets/animation/technology.json',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
