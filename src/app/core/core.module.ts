import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterByPeriodComponent } from './filter-by-period/filter-by-period.component';
import { SaleDetailsTableComponent } from './sale-details-table/sale-details-table.component';
import { FilterBySalesRepsComponent } from './filter-by-sales-reps/filter-by-sales-reps.component';
import { FunnelComponent } from './funnel/funnel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent,
    FilterBySalesRepsComponent,
    FunnelComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent,
    FilterBySalesRepsComponent,
    FunnelComponent
  ]
})
export class CoreModule { }
