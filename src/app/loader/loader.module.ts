import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from '.';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class LoaderModule { }
