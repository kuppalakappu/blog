import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import type { Photo } from './photos.types';


@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http:HttpClient ) { }

    getPhotos(){
      return this.http.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
    }
  
  }

