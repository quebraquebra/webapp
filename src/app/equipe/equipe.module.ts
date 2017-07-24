import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeComponent } from '.';
import { CardMembroModule } from './card-membro';

@NgModule({
  imports: [
    CommonModule,
    CardMembroModule
  ],
  declarations: [EquipeComponent],
  exports: [EquipeComponent]
})
export class EquipeModule { }
