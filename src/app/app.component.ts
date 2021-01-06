import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title: string;
  text: string;
  count: number;

  constructor() {
    this.title = 'Angular Demo Home Page - Clone Flutter';
    this.text = 'You have pushed the button this many times:';
    this.count = 0;
  }

  ngOnInit(): void {}

  onClick(event: boolean): void  {
    this.count += + 1;
  }
}
