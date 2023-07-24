import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  handle: string = 'just-enable';
  phone: string = 'just-enable';
  socialMedia: any[];
  currentYear: number;
  policies = [
    {
      title: 'POLICY.TERMS_CONDITIONS',
      url: '/terms-and-conditions',
    },
    {
      title: 'POLICY.PRIVACY_POLICY',
      url: '/privacy-policy',
    },
    {
      title: 'POLICY.COOKIE_POLICY',
      url: '/cookie-policy',
    },
    {
      title: 'POLICY.ACCESSIBILITY',
      url: '/accessibility',
    },
  ];
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.socialMedia = [
      {
        icon: 'logo-facebook',
        url: 'facebook.com/' + this.handle,
      },
      {
        icon: 'logo-whatsapp',
        url: '',
      },
      {
        icon: 'logo-instagram',
        url: 'instagram.com/' + this.handle,
      },
      {
        icon: 'logo-twitter',
        url: 'twitter.com/' + this.handle,
      },
      {
        icon: 'logo-linkedin',
        url: 'linkedin.com/' + this.handle,
      },
    ];
  }
}
