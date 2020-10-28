import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ctscan',
  templateUrl: './ctscan.component.html',
  styleUrls: ['./ctscan.component.css']
})
export class CtscanComponent implements OnInit {

  name: string;
  image:File;
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onTextchange(event:any){
    this.name = event.target.value;
  }

  onImagechange(event:any){
    this.image = event.target.files[0];
  }
  
  newImage(){
    const uploadImage = new FormData;
    uploadImage.append('name', this.name);
    uploadImage.append('image', this.image, this.image.name);
    this.http.post("http://127.0.0.1:8000/image/", uploadImage).subscribe(
      data => console.log(data), 
      error => console.log(error)

      
      
    )
  }
}
