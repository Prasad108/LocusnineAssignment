import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterByPeriodComponent } from './filter-by-period/filter-by-period.component';
import { SaleDetailsTableComponent } from './sale-details-table/sale-details-table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPeriodComponent,
    SaleDetailsTableComponent
  ]
})
export class CoreModule { }
