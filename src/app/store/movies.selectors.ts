import { createSelector } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';

export const selectFeature = (state: AppState) => state.movies;

// Now playing
// Popular
// Search results
// Error
// Selected
// Selected details
// Selected credits
// Search query
