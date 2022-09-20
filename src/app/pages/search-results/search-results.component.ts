import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.sass'],
})
export class SearchResultsComponent implements OnInit {
  searchQuery = 'Iron Man';
  constructor() {}

  ngOnInit(): void {}
}
