import { Component, OnInit } from '@angular/core';
import { HOBBIES } from '../data';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  mydatas = HOBBIES;
  constructor() { }

  ngOnInit() {
  }

}
