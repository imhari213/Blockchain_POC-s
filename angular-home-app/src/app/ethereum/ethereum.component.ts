import { Component, OnInit, Inject } from '@angular/core';
import * as Chartist from 'chartist';
import { faFilePowerpoint, faFileWord, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../components/dialog/dialog.component';



@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {
  faPpt = faFilePowerpoint;
  faWord = faFileWord;
  faDemo = faPaperPlane;
  faVideo = faYoutube;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
  }

  openDialog(url) {
    this.dialog.open(DialogComponent, {
      data: url
    });
  }

}
