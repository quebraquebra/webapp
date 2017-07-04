import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { FolhaCamaraComponent, FolhaCamaraService } from '.';
import { Ng2TableModule } from 'ng2-table';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    Ng2TableModule,
    Ng2BootstrapModule.forRoot()
  ],
  declarations: [FolhaCamaraComponent],
  exports: [FolhaCamaraComponent],
  providers: [FolhaCamaraService]
})
export class FolhaCamaraModule { }
