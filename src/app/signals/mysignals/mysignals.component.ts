import { Component, computed, OnInit, signal, effect } from '@angular/core';

@Component({
  selector: 'app-mysignals',
  templateUrl: './mysignals.component.html',
  styleUrls: ['./mysignals.component.css']
})
export class MysignalsComponent implements OnInit{
  constructor() {
    effect(() => {
      console.log(`The count is: ${this.count()}`);
      
    })
  }
  ngOnInit(): void {
    
  }

  count = signal(0);
  showCount = signal(true);

  

  conditionalCount = computed(() => {
    if (this.showCount()) {
      return "The count is: " + this.count();
    } else {
      return "Nothing to see here!"
    }
  })

  increase() {
    console.log(this.count());
    this.count.update(value => value + 1);
  }

  decrease() {
    console.log(this.count());
    this.count.update(value => value - 1);
  }

  reset() {
    console.log(this.count());
    // this.count.update(value => value = 0);
    this.count.set(0);
  }


  // Computed Signal 
  doubleCount=computed(() => {
    return this.count() * this.count();
  })

  
}
