import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPhotos, loadPhotosTest, loadedPhotos } from '../state/actions/photos.actions';
import { Observable } from 'rxjs';
import { selectListPhotos, selectLoading } from '../state/selectors/photo.selectors';
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  loading$ : Observable<boolean> = new Observable();
  photos$ : Observable<any> = new Observable();

  constructor(private store: Store<AppState>){
    this.loading$ = this.store.select(selectLoading);
      this.store.select(selectLoading).subscribe(value => {
        console.log("loading ", value);

    })
    this.photos$ = this.store.select(selectListPhotos);

     this.store.select(selectListPhotos).subscribe(value => {
        console.log("photos ", value);

  })

  }



  ngOnInit(): void {
      this.store.dispatch(loadPhotos());
  }

}
