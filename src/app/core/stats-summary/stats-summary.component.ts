import { Component, OnInit } from '@angular/core';
import { ShairedService } from 'src/app/shared/services/shaired.service';

@Component({
  selector: 'app-stats-summary',
  templateUrl: './stats-summary.component.html',
  styleUrls: ['./stats-summary.component.css']
})
export class StatsSummaryComponent implements OnInit {
  callsMade = 0;
  callsRecieved = 0;
  totalProjects = 0;
  Wins = 0;
  BaseRevenue = 0;
  increamentedRevenu = 0;
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
    // whenever saleDetailsList list is updated compute this
    this.shairedService.$saleDetailsList.subscribe(Sales => {
      this.callsMade = 0;
      this.callsRecieved = 0;
      this.totalProjects = 0;
      this.Wins = 0;
      this.BaseRevenue = 0;
      this.increamentedRevenu = 0;
        Sales.forEach(sale => {
          if (sale.EngagementStatus === 'Won' || sale.EngagementStatus === 'Lost') {
            this.callsMade += sale.callsTried;
            this.callsRecieved += sale.callsRecived;
            this.totalProjects ++;

            if (sale.EngagementStatus === 'Won') {
              this.Wins++;
              this.BaseRevenue += sale.baseRevenue;
              this.increamentedRevenu += sale.incrementedRevenue;
            }
          }
        });
     });
  }

}
