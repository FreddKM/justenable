import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private titleService: Title,
    private translate: TranslateService
  ) {}

  public setTitle(title: string) {
    this.translate
      .get(title)
      .subscribe((title) =>
        this.titleService.setTitle('Just Enable | ' + title)
      );
  }
}
