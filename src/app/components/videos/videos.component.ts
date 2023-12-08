import { Component,OnInit } from '@angular/core';
import { VideosService } from './videos.service';
import type { Video } from './videos.types';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit { 

  videos:Video[] = [{path:"abcvideo.mp4",title:"hello"},{path:"abcvideo.mp4",title:"helloworld"}]

  constructor(private videosService : VideosService){ }
 ngOnInit(){

  this.videosService.getVideos().subscribe((res:Video[])=>{
      this.videos=res
  })

 }
 
}




