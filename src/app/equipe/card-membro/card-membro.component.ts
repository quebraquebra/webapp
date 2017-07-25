import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-membro',
  templateUrl: './card-membro.component.html',
  styleUrls: ['./card-membro.component.scss']
})
export class CardMembroComponent {

  @Input() foto: string;
  @Input() funcao: string;
  @Input() nome: string;
  @Input() lattesLink: string;
  @Input() linkedinLink: string;
  @Input() websiteLink: string;
}
