import { Component } from '@angular/core';

import { Artist } from './artist';

@Component({
  selector: 'artist-form',
  templateUrl: './artist-form.component.html'
})
export class ArtistFormComponent {
  medium = ['oil paint', 'watercolor', 'digital', 'clay'];

  model = new Artist(20, 'Francesca', this.medium[0], 'Purple');

  submitted = false;
  onSubmit() { this.submitted = true; }

  // TODO: remove later
  get diagnostic() { return JSON.stringify(this.model); }

  newArtist() {
    this.model = new Artist(42, '', '');
  }
}
