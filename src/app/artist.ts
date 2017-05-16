import { Component } from '@angular/core';

export class Artist {
  constructor(
    public id: number,
    public name: string,
    public medium: string,
    public favoriteColor?: string
  ) { }
}