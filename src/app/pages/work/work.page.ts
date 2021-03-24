import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.page.html',
  styleUrls: ['./work.page.scss'],
})
export class WorkPage implements OnInit {
  constructor(private titleService: UtilsService) {
    this.titleService.setTitle('NAVIGATION.WORK');
  }

  ngOnInit() {}
}
