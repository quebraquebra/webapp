/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuantoCustaComponent } from './quanto-custa.component';

describe('QuantoCustaComponent', () => {
  let component: QuantoCustaComponent;
  let fixture: ComponentFixture<QuantoCustaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantoCustaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantoCustaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});