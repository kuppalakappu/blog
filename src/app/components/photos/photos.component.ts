import { Component, OnInit } from '@angular/core';
import { Photo } from './photos.types';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {


  photos:Photo[]= []
  
  a:number=4

 constructor( private photoservice:PhotosService){ }

 ngOnInit() {
   const onRecieve=(res:Photo[]) => { this.photos=res   }
   this.photoservice.getPhotos().subscribe(onRecieve)
 }

}