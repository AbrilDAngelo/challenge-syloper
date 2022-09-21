import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.sass'],
})
export class ErrorAlertComponent implements OnInit {
  @Input() title: string = 'Error';
  @Input() message!: string;
  constructor() {}

  ngOnInit(): void {}
}
