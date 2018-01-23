import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.pug',
  styleUrls: ['./overlay.component.styl']
})
export class OverlayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0,1);
  }

}
