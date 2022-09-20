import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass'],
})
export class MovieCardComponent implements OnInit {
  @Input() posterUrl!: string;
  @Input() title!: string;
  @Input() release_date!: Date;
  @Input() rating: number = 0;
  ratingInt!: number;
  maxRating = 10;
  constructor() {}

  ngOnInit(): void {
    this.ratingInt = Math.round(this.rating);
  }
}
