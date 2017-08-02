import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaisRicos1Component } from '.';
import { LoaderModule } from '../loader';

@NgModule({
  imports: [
    CommonModule,
    LoaderModule
  ],
  declarations: [MaisRicos1Component],
  exports: [MaisRicos1Component]
})
export class MaisRicos1Module { }
