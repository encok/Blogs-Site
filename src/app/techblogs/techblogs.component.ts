import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-techblogs',
  templateUrl: './techblogs.component.html',
  styleUrls: ['./techblogs.component.css']
})
export class TechblogsComponent implements OnInit {

  constructor(private _services:NewsapiservicesService) { }

  techblogsDisplay:any = [];

  ngOnInit(): void {

    this._services.techBlogs().subscribe((result)=>{
        this.techblogsDisplay = result.articles;
    });
  }

}
