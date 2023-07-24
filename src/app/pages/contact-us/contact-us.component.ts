import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

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
  apiLoaded: Observable<boolean>;
  locationLatLng = { lat: -25.77784037627296, lng: 28.2835987398403 };

  options: google.maps.MapOptions = {
    center: this.locationLatLng,
    zoom: 18,
    // zoomControl: false,
    // mapTypeControl: false,
    // streetViewControl: false,
    // fullscreenControl: false,
    disableDefaultUI: true,
  };

  marker: google.maps.MarkerOptions = {
    position: this.locationLatLng,
  };

  constructor(private httpClient: HttpClient) {
    this.apiLoaded = this.httpClient
      .jsonp(
        `https://maps.googleapis.com/maps/api/js?key=${environment.GoogleMapsAPIKey}`,
        'callback'
      )
      .pipe(
        map(() => true),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }
}
