import { Component, OnInit } from '@angular/core';
import { STUDIES } from '../data';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent implements OnInit {

  mydatas = STUDIES;
  constructor() { }

  ngOnInit() {
  }

}
