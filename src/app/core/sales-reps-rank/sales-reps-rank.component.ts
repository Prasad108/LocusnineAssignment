import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-reps-rank',
  templateUrl: './sales-reps-rank.component.html',
  styleUrls: ['./sales-reps-rank.component.css']
})
export class SalesRepsRankComponent implements OnInit {

  orderFilters = ['TOP', 'BOTTOM'];
  selectedIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  ChangeOrder(index: number, order: String) {
    this.selectedIndex =  index;
  }

}
