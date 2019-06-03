import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod'
import { Router } from '@angular/router';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { async } from 'rxjs/internal/scheduler/async';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent {


  info: any = {};
  data: any = {};
  details: any = {};
  len;


  constructor(private http: HttpClient, private router: Router, protected localStorage: LocalStorage, private spinnerService: Ng4LoadingSpinnerService) {

    
    //getting data from local storage

    this.localStorage.getItem('user').subscribe(async(user) => {
      console.log(user.id);// should be 'Henri'
      console.log(user);
      this.info = await user;
      this.data.email =  await user.email;
      console.log(this.data);
    
      this.http.post('https://blockchain.evokeapps.io:7000/goals', this.data).subscribe(
        response => {
  
         // console.log(response);
          this.details = response;
          this.len = this.details.length;
          console.log(this.len);
          console.log(this.details);
  
          
        })
  


    });


    //getting api call



  }

  dashboard(){

    this.router.navigateByUrl("/Dashboard");
  }

  


}
