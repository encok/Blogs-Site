import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.css']
})
export class PostBlogComponent implements OnInit {

  constructor(private http:HttpClient) { }
  

  

  ngOnInit(): void {}
    
    onSubmit(data){
    this.http.post('http://localhost:5000/blogs',data)
    .subscribe((result)=>{
      console.warn("result",result)
    })
    console.warn(data)
  }

}
