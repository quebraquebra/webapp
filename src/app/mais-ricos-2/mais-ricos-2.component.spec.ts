/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaisRicos2Component } from './mais-ricos-2.component';

describe('MaisRicos2Component', () => {
  let component: MaisRicos2Component;
  let fixture: ComponentFixture<MaisRicos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisRicos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisRicos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});