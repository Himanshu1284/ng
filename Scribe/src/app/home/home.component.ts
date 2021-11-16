import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string = 'internshala';
  amount:number=11110000;
  dOB = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
