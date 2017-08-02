import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaisRicos2Component } from '.';
import { LoaderModule } from '../loader';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [MaisRicos2Component],
  exports: [MaisRicos2Component],
})
export class MaisRicos2Module { }
