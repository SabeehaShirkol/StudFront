import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myimage1:string="../assets/student-management-banner-1920x1080-1-1024x576.png";

  constructor() { }

  ngOnInit(): void {
  }

}
