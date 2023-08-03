import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { UserPhoto } from '../interfaces/user-photo.interface';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: UserPhoto[] = [{
    filepath: "soon...",
    webviewPath: 'assets/images/avatar.svg'
  }];
  private PHOTO_STORAGE: string = 'photos';

  constructor() { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    this.photos.unshift({
      filepath: "soon...",
      webviewPath: capturedPhoto.webPath!
    });

    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
    
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (value ? JSON.parse(value) : []) as UserPhoto[];
  
    for (let photo of this.photos) {
      // Read each saved photo's data from the Filesystem
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
    
      // Web platform only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

  async openCamera(){
    
    //if (this.imagesend.length <= 1) {
    alert("1");
      const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: false,
          correctOrientation: true,
          resultType: CameraResultType.Uri, 
          source: CameraSource.Photos
        });

      alert(2);  

      this.photos.unshift({
        filepath: "soon...",
        webviewPath: image.dataUrl!
      });

    //this.imagesend.push(image.base64String);
    //this.base64Image.push("data:image/jpeg;base64," + image.base64String);
    //}
    //else{
    //console.log("You can only upload two images.");
    //}
  }

}
