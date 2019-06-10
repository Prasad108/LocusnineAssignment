import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-by-period',
  templateUrl: './filter-by-period.component.html',
  styleUrls: ['./filter-by-period.component.css']
})
export class FilterByPeriodComponent implements OnInit {

  dateFilters: String[] = ['TODAY', 'LAST WEEK', 'LAST MONTH', 'THIS QUARTER', 'THIS YEAR'];
  selectedIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  public ChangeDateFilter(index: number, period: String) {
    this.selectedIndex = index;
  }

}
