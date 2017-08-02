import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoVsPrivadoComponent } from '.';
import { LoaderModule } from '../loader';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [PublicoVsPrivadoComponent],
  exports: [PublicoVsPrivadoComponent]
})
export class PublicoVsPrivadoModule { }
