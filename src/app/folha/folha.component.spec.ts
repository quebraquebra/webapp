/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FolhaComponent } from './folha.component';

describe('FolhaComponent', () => {
  let component: FolhaComponent;
  let fixture: ComponentFixture<FolhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});