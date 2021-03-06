import { Component } from '@angular/core';

@Component({
  selector: 'key-up4',
  template: `
    <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">

    <p>{{value}}</p>`
})
export class KeyUpComponentOnBlur {
  value = "";
  update(value: string) {this.value = value; }
}