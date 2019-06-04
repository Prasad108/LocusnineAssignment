import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FilterByPeriodComponent } from './filter-by-period/filter-by-period.component';

@NgModule({
  declarations: [HeaderComponent, FilterByPeriodComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FilterByPeriodComponent
  ]
})
export class CoreModule { }
