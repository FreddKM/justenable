import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
  constructor(private titleService: UtilsService) {
    this.titleService.setTitle('NAVIGATION.SERVICES');
  }

  ngOnInit() {}
}
