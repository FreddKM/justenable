import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  email: string = 'info@justenable.co.za';
  phone: string = '+27 87 265 2874';
  mobile: string = '+27 72 848 6786';
  location: string = '68 Glenwood Rd, Lynnwood Glen, Pretoria, 0081';
  locationLink: string = 'https://goo.gl/maps/fc5xF1pbYNjvLxGg8';
}
