import { Component, OnInit } from '@angular/core';
import { SaleDetails } from 'src/app/shared/models/SaleDetails';
import { ShairedService } from 'src/app/shared/services/shaired.service';
import { SalesRep } from './../../shared/models/SalesRep';


@Component({
  selector: 'app-sales-reps-rank',
  templateUrl: './sales-reps-rank.component.html',
  styleUrls: ['./sales-reps-rank.component.css']
})
export class SalesRepsRankComponent implements OnInit {

  orderFilters = ['TOP', 'BOTTOM'];
  selectedIndex = 0;
  saleRepList: SalesRep [];
  constructor(private shairedService: ShairedService) { }

  ngOnInit() {
    this.shairedService.$saleDetailsList.subscribe(sales => {
      this.saleRepList = [];
      sales.forEach(sale => {
        if (sale.EngagementStatus === 'Won' || sale.EngagementStatus === 'Lost') {
          let found = false;
          this.saleRepList.forEach(SalesRepresentative => {
            if (SalesRepresentative.name === sale.SalesRep) {
              found = true;
              SalesRepresentative.demoCalls += sale.callsRecived;
              SalesRepresentative.newMMR += sale.NewMMR;
              SalesRepresentative.newLogo += sale.NewLogo;
            }
          });

          if (!found) {
            const user: SalesRep = {
               name: sale.SalesRep,
               demoCalls: sale.callsRecived,
               newMMR: sale.NewMMR,
               newLogo: sale.NewLogo,
            };
            this.saleRepList.push(user);
          }
        }
      });

    });
  }

  ChangeOrder(index: number, order: String) {
    this.selectedIndex =  index;
  }

}
