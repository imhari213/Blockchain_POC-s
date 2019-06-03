import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit {

  id;
  data: any = {};
  constructor(private route:ActivatedRoute,private http:HttpClient,protected localStorage: LocalStorage) { }

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
        });
        
      //  this.router.navigateByUrl('/Dashboard');


      }
    )
  
   }

  }