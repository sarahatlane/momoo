import { Component, Input, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'Job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  @Input('job') job: Job;

  constructor() { }

  ngOnInit(): void {
  }

}


