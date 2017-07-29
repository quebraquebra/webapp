/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaisRicos1Component } from './mais-ricos-1.component';

describe('MaisRicos1Component', () => {
  let component: MaisRicos1Component;
  let fixture: ComponentFixture<MaisRicos1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisRicos1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisRicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});