import { PerfilModule } from './../folha/folha-senado/perfil/perfil.module';
import { GenericTableModule } from './../shared/generic-table/generic-table.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipeComponent } from './equipe.component';

describe('EquipeComponent', () => {
  let component: EquipeComponent;
  let fixture: ComponentFixture<EquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        GenericTableModule,
        PerfilModule
      ],
      declarations: [ EquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
