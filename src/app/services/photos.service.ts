import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get("https://jsonplaceholder.typicode.com/photos/2").pipe(map(value =>{
      console.log("Service ", [value]);
      return [value]
    }));
  }
}
