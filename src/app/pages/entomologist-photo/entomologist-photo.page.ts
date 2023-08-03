import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/core/services/photo.service';

@Component({
  selector: 'app-entomologist-photo',
  templateUrl: './entomologist-photo.page.html',
  styleUrls: ['./entomologist-photo.page.scss'],
})
export class EntomologistPhotoPage implements OnInit {

  public default_photo:string = '';
  public has_photo:boolean = false;

  constructor(public photoService: PhotoService) { }

  async ngOnInit() {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
    this.default_photo = this.photoService.photos[0].webviewPath!;
    if(this.default_photo){
      this.has_photo=true;
    }
  }

  openGallery() {
    this.photoService.openCamera();
    this.default_photo = this.photoService.photos[0].webviewPath!;
    if(this.default_photo){
      this.has_photo=true;
    }
  }

}
