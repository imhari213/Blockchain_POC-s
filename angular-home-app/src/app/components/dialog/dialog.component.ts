import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  iframe_html: any;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public sanitizer: DomSanitizer, private embedService: EmbedVideoService) {

  }

  ngOnInit() {
    this.iframe_html = this.embedService.embed("https://www.youtube.com/watch?v="+this.data, { attr: { width: 600, height: 400 } });
  }
}
