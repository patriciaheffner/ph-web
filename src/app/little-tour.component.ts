import { Component } from '@angular/core';

@Component({
  selector: 'print-list',
  template: `
    <input #newPrint
      (keyup.enter)="addPrint(newPrint.value); newPrint.value='' "
      (blur)="addPrint(newPrint.value); newPrint.value='' ">

    <button (click)="addPrint(newPrint.value)">Add</button>

    <ul><li *ngFor="let hero of prints">{{hero}}</li></ul>
  `
})
export class LittleTourComponent {
  prints = ['Stripe', 'Solid', 'Dots', 'Pucci'];

  addPrint(newPrint: string) {
    if (newPrint) {
      this.prints.push(newPrint);
    }
  }
}
