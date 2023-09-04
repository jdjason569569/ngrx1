import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPhotos } from '../state/actions/photos.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  constructor(private store: Store){

  }

  ngOnInit(): void {
      this.store.dispatch(loadPhotos());
  }

}