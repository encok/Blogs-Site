import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {


  constructor(private _services:NewsapiservicesService) { }

  // displaydata
  blogs : any;

  ngOnInit(): void {
    this._services.topHeading().subscribe((data)=>
    this.blogs = data);
  }

}
