import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-membro',
  templateUrl: './card-membro.component.html',
  styleUrls: ['./card-membro.component.scss']
})
export class CardMembroComponent {

  @Input() foto: string;
  @Input() nome: string;
  @Input() offset: number;
  @Input() papel: string;

  public constructor() {
    this.offset = 0;
  }
}
