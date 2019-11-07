import { Component, OnInit } from '@angular/core';
import { MYDATAS } from '../data';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  mydatas = MYDATAS;
  constructor() { }

  ngOnInit() {
  }

}
