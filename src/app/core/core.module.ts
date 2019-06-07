import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterByPeriodComponent } from './filter-by-period/filter-by-period.component';
import { SaleDetailsTableComponent } from './sale-details-table/sale-details-table.component';
import { FunnelComponent } from './funnel/funnel.component';
import { StatsSummaryComponent } from './stats-summary/stats-summary.component';
import { SalesRepsRankComponent } from './sales-reps-rank/sales-reps-rank.component';
import { FilterByVerticalComponent } from './filter-by-vertical/filter-by-vertical.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent,
    FunnelComponent,
    StatsSummaryComponent,
    SalesRepsRankComponent,
    FilterByVerticalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent,
    FunnelComponent,
    StatsSummaryComponent,
    SalesRepsRankComponent,
    FilterByVerticalComponent
  ]
})
export class CoreModule { }
