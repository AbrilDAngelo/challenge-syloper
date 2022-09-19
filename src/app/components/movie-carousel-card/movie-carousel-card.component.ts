import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-carousel-card',
  templateUrl: './movie-carousel-card.component.html',
  styleUrls: ['./movie-carousel-card.component.sass'],
})
export class MovieCarouselCardComponent implements OnInit {
  @Input() posterUrl!: string;
  @Input() title!: string;
  @Input() release_date!: Date;
  constructor() {}

  ngOnInit(): void {}
}
