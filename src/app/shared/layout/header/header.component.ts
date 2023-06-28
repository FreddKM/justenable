import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navigation: any[] = [
    {
      title: 'NAVIGATION.HOME',
      url: '',
    },
    // {
    //   title: 'NAVIGATION.SERVICES',
    //   url: '/services',
    // },
    // {
    //   title: 'NAVIGATION.WORK',
    //   url: '/work',
    // },
    {
      title: 'NAVIGATION.ABOUT_US',
      url: '/about-us',
    },
    {
      title: 'NAVIGATION.AUTOMATION',
      url: '/automation',
    },
    {
      title: 'NAVIGATION.MAINTENANCE',
      url: '/maintenance',
    },
  ];

  languages = environment.languages;
  selected: string = '';
  hideLanguageList: boolean = true;
  showMenu: boolean = false;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.selected = this.languages[1];
  }

  setLanguage(language: string) {
    this.selected = language;
    this.hideLanguageList = true;
    this.translate.use(language.toLocaleLowerCase());
  }

  toggleLanguageList() {
    this.hideLanguageList = !this.hideLanguageList;

    if (!this.hideLanguageList && this.showMenu) {
      this.showMenu = false;
    }
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;

    if (this.showMenu && !this.hideLanguageList) {
      this.hideLanguageList = true;
    }
  }
}
