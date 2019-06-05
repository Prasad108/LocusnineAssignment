import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShairedService } from './services/shaired.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers : [
    ShairedService
  ]
})
export class SharedModule { }
