import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit {
  ngOnInit(): void {
    
  }


  count: number = 0;

  updateCount(newCount: number) {
    this.count = newCount;
  }
}
