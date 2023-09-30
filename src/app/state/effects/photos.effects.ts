import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, map, mergeMap, tap } from 'rxjs';
import { PhotosService } from 'src/app/services/photos.service';
import { loadPhotos } from '../actions/photos.actions';

@Injectable()
export class PhotosEffects {
  constructor(private actions$: Actions, private photoService: PhotosService) {}

  //Permite lanzar el effect cuando escucha una accion
  loadPhotosV1$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPhotos),
      mergeMap(() =>
        this.photoService.getPhotos().pipe(
          tap((value) => {
            console.log('photos in effect ', value);
          }),
          map((photos) => ({ type: '[Photo List] loaded success', photos })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // Permite lanzar el efecto cuando el servicio emite un valor
  // loadPhotosV2$ = createEffect(() => {
  //   return this.photoService.getPhotos().pipe(map(photos =>
  //     ({type: "[Photo List] loaded success", photos})),
  //     catchError(() => EMPTY)
  //     )
  // });
}
