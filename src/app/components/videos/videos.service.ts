import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import type { Video } from './videos.types';
@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http:HttpClient) { }

  getVideos(){
    return this.http.get<Video[]>('url')
  }
}
