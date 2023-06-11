/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableBachesComponent } from './TableBaches.component';

describe('TableBachesComponent', () => {
  let component: TableBachesComponent;
  let fixture: ComponentFixture<TableBachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
