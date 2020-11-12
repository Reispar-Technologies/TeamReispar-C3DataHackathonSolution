import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    // https://covidreisparbe.herokuapp.com/route/image/ to be replaced to connect to the BE
    // http://127.0.0.1:8000/route/image/ for local server
  url = "https://covidreisparbe.herokuapp.com/route/image/"
  
  httpHeaders = new HttpHeaders({'Content-Type':"application/json"})

  constructor(private http:HttpClient) { }

  postImage(image): Observable<any> {
    return this.http.post(this.url, image, {
      reportProgress: true,
      observe: "events"
    })

  }
  getImagedata():Observable<any>{
    return this.http.get(this.url,
      {headers:this.httpHeaders} );
  }
}
