/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComoComparaComponent } from './como-compara.component';

describe('ComoComparaComponent', () => {
  let component: ComoComparaComponent;
  let fixture: ComponentFixture<ComoComparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComoComparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComoComparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});