import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuantoCustaComponent } from '.';
import { LoaderModule } from '../loader';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [QuantoCustaComponent],
  exports: [QuantoCustaComponent]
})
export class QuantoCustaModule { }
