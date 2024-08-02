import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    
  }

  count: number = 0;

  updateCount(newCount: number) {
    this.count = newCount;
  }
}
