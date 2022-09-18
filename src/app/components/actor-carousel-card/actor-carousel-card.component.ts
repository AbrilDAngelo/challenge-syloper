import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-actor-carousel-card',
  templateUrl: './actor-carousel-card.component.html',
  styleUrls: ['./actor-carousel-card.component.sass'],
})
export class ActorCarouselCardComponent implements OnInit {
  @Input() imgUrl!: string;
  @Input() name!: string;
  @Input() role!: string;
  constructor() {}

  ngOnInit(): void {}
}
