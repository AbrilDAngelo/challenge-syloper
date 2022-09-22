import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, MovieComponent, SearchResultsComponent],
  imports: [CommonModule, ComponentsModule, RouterModule, PipesModule],
})
export class PagesModule {}
