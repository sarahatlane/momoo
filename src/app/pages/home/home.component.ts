import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobs_mock: Job[] = [

  ];

  constructor() { }

  ngOnInit(): void {
  }

}



