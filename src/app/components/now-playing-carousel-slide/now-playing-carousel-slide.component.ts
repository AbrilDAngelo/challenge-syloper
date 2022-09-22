import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/tmdb.interface';

@Component({
  selector: 'app-now-playing-carousel-slide',
  templateUrl: './now-playing-carousel-slide.component.html',
  styleUrls: ['./now-playing-carousel-slide.component.sass'],
})
export class NowPlayingCarouselSlideComponent implements OnInit {
  @Input() movie!: Movie;
  @Input() active!: string;

  constructor() {}

  ngOnInit(): void {}
}
