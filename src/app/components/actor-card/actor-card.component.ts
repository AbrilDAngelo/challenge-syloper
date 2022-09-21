import { Component, Input, OnInit } from '@angular/core';
import { Cast } from '../../interfaces/tmdb.interface';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.sass'],
})
export class ActorCardComponent implements OnInit {
  @Input() actor!: Cast;
  // Fallback url de imagen
  noImgUrl = '../../../../assets/no-profile-picture.jpg';
  constructor() {}

  ngOnInit(): void {}
}
