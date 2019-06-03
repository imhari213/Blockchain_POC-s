import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';



@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  private _albums = [];
  constructor(private _lightbox: Lightbox) { 
    const album = {
       src: "https://i.pinimg.com/originals/78/96/34/7896346363a9b34fc7f91b89cf077bc5.jpg",
    };
    const album2 = {
       src: "../../assets/img/ucc-app.png",
    };
    const album3 = {
       src: "../../assets/img/ethereumArch.png",
    };
    this._albums.push(album);
    this._albums.push(album2);
    this._albums.push(album3);
  }
  ngOnInit() {
  }
  openLightbox(index: number){
    console.log(this._lightbox.open(this._albums, index))
    this._lightbox.open(this._albums, index);
  }

}
