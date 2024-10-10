import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  private httpClient = inject(HttpClient);
  destroyRef = inject(DestroyRef);
  isFetchingData = signal(false);
  hasErrorsFetchingData = signal(false);
  errorMessage = signal('');

  ngOnInit() {
    this.isFetchingData.set(true);
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/places')
      .pipe(
        map((resData) => resData.places),
        catchError((err) => {
          console.error(err);
          return throwError(() => {
            throw new Error('An error occurred while fetching data.');
          });
        })
      )
      .subscribe({
        next: (resData) => {
          this.places.set(resData);
        },
        error: (err: Error) => {
          this.hasErrorsFetchingData.set(true);
          this.errorMessage.set(err.message);
        },
        complete: () => {
          this.isFetchingData.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlace(selectedPlace: Place) {
    console.log('Selected place:', selectedPlace);
    this.httpClient
      .put('http://localhost:3000/user-places', { placeId: selectedPlace.id })
      .subscribe();
  }
}
