import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-now-playing-carousel-slide',
  templateUrl: './now-playing-carousel-slide.component.html',
  styleUrls: ['./now-playing-carousel-slide.component.sass'],
})
export class NowPlayingCarouselSlideComponent implements OnInit {
  @Input() backdropUrl!: string;
  @Input() title!: string;
  @Input() overview!: string;
  @Input() active: string = ''
  constructor() {}

  ngOnInit(): void {}
}
