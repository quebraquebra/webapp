/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GenericTableComponent } from '.';
import { PerfilComponent } from '../../folha/folha-camara/perfil';

describe('GenericTableComponent', () => {
  let component: GenericTableComponent<PerfilComponent>;
  let fixture: ComponentFixture<GenericTableComponent<PerfilComponent>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
