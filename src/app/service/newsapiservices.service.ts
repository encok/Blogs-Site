import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor( private _http:HttpClient) { }
 // Blogs api Url
 blogsApiUrl = "http://127.0.0.1:5000/blogs"

 //tech blogs api url

 techApiUrl ="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b7735b33b2ef4eff9102cf046e75bb7f"


  // topheading()
  
  topHeading():Observable<any>
  {
    return this._http.get(this.blogsApiUrl);
  }

  //techblogs()
  techBlogs():Observable<any>
  {
    return this._http.get(this.techApiUrl);
  }
}
