import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { map, catchError } from "rxjs/operators"
import { throwError } from "rxjs";

@Component({
  selector: 'app-ctscan',
  templateUrl: './ctscan.component.html',
  styleUrls: ['./ctscan.component.css']
})
export class CtscanComponent implements OnInit {

  name: string;
  image: File;
  progress: number;
  message:string;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onTextchange(event: any) {
    this.name = event.target.value;
  }

  onImagechange(event: any) {
    this.image = event.target.files[0];
  }

  newImage() {
    const uploadImage = new FormData;
    this.progress = 1;
    uploadImage.append('name', this.name);
    uploadImage.append('image', this.image, this.image.name);
    this.http.post("http://127.0.0.1:8000/image/", uploadImage, {
      reportProgress: true,
      observe: "events"
    }).pipe(
      map((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.progress = Math.round((100 / event.total) * event.loaded);
          if (this.progress === 100){
            this.message = "Upload Completed"
          }
        } else if (event.type == HttpEventType.Response) {
          this.progress = null;
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
