import { Component, OnInit } from '@angular/core';
import { ShairedService } from './../../shared/services/shaired.service';
import { DistinctVerticalsService } from './../../shared/services/distinct-verticals.service';


@Component({
  selector: 'app-filter-by-vertical',
  templateUrl: './filter-by-vertical.component.html',
  styleUrls: ['./filter-by-vertical.component.css']
})
export class FilterByVerticalComponent implements OnInit {
  Verticals:  String[] = [];
  constructor(private shairedService: ShairedService,
    private distinctVerticalsService: DistinctVerticalsService) { }

  ngOnInit() {
    this.distinctVerticalsService.getDistinctVerticals().subscribe(data => {
      data.forEach(Vertical => {
        this.Verticals.push(Vertical);
      });
    });
  }
  onChange(vertical: any) {
    this.shairedService.$vectorFilter.next(vertical);
  }

}
