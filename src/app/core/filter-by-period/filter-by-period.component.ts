import { Component, OnInit } from '@angular/core';
import { ShairedService } from 'src/app/shared/services/shaired.service';

@Component({
  selector: 'app-filter-by-period',
  templateUrl: './filter-by-period.component.html',
  styleUrls: ['./filter-by-period.component.css']
})
export class FilterByPeriodComponent implements OnInit {

  dateFilters = [
    {
       'name': 'TODAY',
       'value': 'today'    },
    {
       'name': 'LAST WEEK',
       'value': 'last_week'    },
    {
       'name': 'LAST MONTH',
       'value': 'last_month'    },
    {
       'name': 'THIS QUARTER',
       'value': 'this_quarter'    },
    {
       'name': 'THIS YEAR',
       'value': 'this_year'    }
  ];
  selectedIndex = 4;
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
  }

  public ChangeDateFilter(index: number, period: any) {
    this.selectedIndex = index;
    this.shairedService.$dateFilter.next(period);
  }

}
