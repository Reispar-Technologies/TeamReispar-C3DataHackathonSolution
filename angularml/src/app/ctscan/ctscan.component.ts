import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, catchError } from "rxjs/operators"
import { throwError } from "rxjs";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ctscan',
  templateUrl: './ctscan.component.html',
  styleUrls: ['./ctscan.component.css']
})
export class CtscanComponent implements OnInit {

  name: string;
  image: File;
  progress: number;
  message: string;

  imagearray = { id: -1, name: '', image: File, prediction: '' };

  imgURL: any;



  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }
  onTextchange(event: any) {
    this.name = event.target.value;
  }

  onImagechange(event: any) {
    this.image = event.target.files[0];
    this.preview_image(this.image)
  }
  preview_image(files) {
      
    var reader = new FileReader();
    reader.readAsDataURL(files); 
    reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    }}
 




  getPred() {
    this.api.getImagedata().subscribe(
      data => {
        this.imagearray = data[0];

      },
      error => {
        console.log(error);

      }
    )
  }


  newImage() {
    const uploadImage = new FormData;
    this.progress = 1;
    uploadImage.append('name', this.name);
    uploadImage.append('image', this.image, this.image.name);
    this.api.postImage(uploadImage).pipe(
      map((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round((100 / event.total) * event.loaded);
          if (this.progress === 100) {
            this.message = "Upload Completed"

          }
        } else if (event.type == HttpEventType.Response) {
          this.progress = null;
          this.getPred()
          console.log(this.imagearray, ' called func');

        }
      }),
      catchError((err: any) => {
        this.progress = null;
        this.message = "Upload failed"
        return throwError(err.message);
      })
    ).toPromise();

  }

}
