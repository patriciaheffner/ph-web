import { Component } from '@angular/core';

import { Print } from './print';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  myPrint: string;
  prints: any[];

  constructor() {
    this.title = 'Hello there!';
    this.prints = [
      new Print (1, 'Polka Dot'),
      new Print (2, 'Plaid'),
      new Print (3, 'Stripes'),
      new Print (4, 'Solid')
    ];
    this.myPrint = this.prints[0];
  }
}
