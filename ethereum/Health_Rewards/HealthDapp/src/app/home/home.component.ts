import { Component, OnInit } from '@angular/core';
import { User } from './../Entities/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod'
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user = new User();
  data: any = {};
  userinfo: any = {};
  url = environment.api;
  email;
  notify: any = {};

  constructor(private http: HttpClient,private router:Router,protected localStorage: LocalStorage,private spinnerService: Ng4LoadingSpinnerService) {

    this.localStorage.getItem('user').subscribe((user) => {
      console.log(user);
      console.log(user.id);// should be 'Henri'
      this.userinfo = user;
      console.log(this.userinfo);
   });

  }


  GetHttpHeaders() : HttpHeaders{
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return headers;
  }



  addUser(userinfo) {
    this.spinnerService.show();
    console.log(userinfo);
    this.data = userinfo;
    this.data.email = this.userinfo.email;
    console.log(this.data);
    return this.http.post(this.url+"setGoal", this.data,{ headers: this.GetHttpHeaders() }).subscribe(
      response => {
        
        console.log(response);
        
        this.notify = response;
        console.log(this.notify);
        this.spinnerService.hide();
        alert(this.notify.message);

       // this.router.navigateByUrl('/Dashboard');


      }
    )


  }

}
