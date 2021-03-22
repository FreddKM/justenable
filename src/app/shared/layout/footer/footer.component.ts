import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  handle: 'just-enable';
  phone: 'just-enable';
  socialMedia: any[];
  currentYear;
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
    }
  ];
  constructor() {
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

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
