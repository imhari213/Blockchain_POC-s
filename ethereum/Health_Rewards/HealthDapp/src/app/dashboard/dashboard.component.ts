import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  // data: any = {};
  request:any = {};

  id;
  data: any = {};
  notify: any = {};
  info: any = {};
  showmodal:boolean;
  closeModal:boolean;

  ngOnInit() {

    const queryParams = this.route.snapshot.queryParams
   
    console.log(queryParams.username);
    this.data.email = queryParams.username; 

    this.http.post('https://blockchain.evokeapps.io:7000/me',this.data).subscribe(
      response => {
        
        console.log(response);

        this.localStorage.setItem('user', response).subscribe(() => {

          console.log("set");
        });


        this.localStorage.getItem('user').subscribe((user) => {
           console.log(user.id);// should be 'Henri'
           console.log(user);
           this.info = user;
        });
        
      //  this.router.navigateByUrl('/Dashboard');


      }
    )
  
   }

 

  constructor(private route:ActivatedRoute,private http:HttpClient,private router:Router,protected localStorage: LocalStorage,private spinnerService: Ng4LoadingSpinnerService) {

    // this.localStorage.getItem('user').subscribe((user) => {
    //   console.log(user.id);// should be 'Henri'
    //   this.data = user;
    //    console.log(this.data);
    // });

  }


  showModal(){
    this.showmodal = true;
    this.closeModal=true;
    }
    close(){
      this.closeModal=false;
      this.showmodal = false;
    }

 
    nav(){

      this.router.navigateByUrl("/set");
    }


  claim(){

    this.spinnerService.show();
      this.request.walletAddress = this.info.walletid;
      this.request.username = this.info.username;
      this.request.email = this.info.email;

      
       this.http.post("https://blockchain.evokeapps.io:7000/claim",this.request).subscribe(
        response => {
          
          console.log(response);
          this.notify = response;
          console.log(this.notify);
          this.spinnerService.hide();
          alert(this.notify.message)
     
  
  
        }
      )
  
  


  }


  goal(){
 
    this.router.navigateByUrl("/goals"); 


  }



}
