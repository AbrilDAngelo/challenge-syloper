import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.sass'],
})
export class RatingComponent implements OnInit {
  @Input() movieRating!: number;
  ratingInt!: number;
  // Máxima puntuación
  maxRating = 10;
  constructor() {}

  ngOnInit(): void {
    // Aproximación del rating al entero más próximo
    this.ratingInt = Math.round(this.movieRating);
  }
}
