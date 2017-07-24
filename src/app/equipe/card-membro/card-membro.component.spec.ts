/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardMembroComponent } from './card-membro.component';

describe('CardMembroComponent', () => {
  let component: CardMembroComponent;
  let fixture: ComponentFixture<CardMembroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMembroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});