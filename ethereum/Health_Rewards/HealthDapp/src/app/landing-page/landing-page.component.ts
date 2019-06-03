import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  constructor(private http: HttpClient, protected localStorage: LocalStorage) { }



  login() {
    console.log("hello");
    window.open('https://blockchain.evokeapps.io:7000/auth/google', '_self');
  }

}
