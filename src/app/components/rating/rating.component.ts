import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
  @Input() movieRating!: number;
  ratingInt!: number;
  maxRating = 10;
  constructor() {}

  ngOnInit(): void {
    this.ratingInt = Math.round(this.movieRating);
  }
}
