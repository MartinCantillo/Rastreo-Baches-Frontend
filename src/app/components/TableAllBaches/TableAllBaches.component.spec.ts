/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableAllBachesComponent } from './TableAllBaches.component';

describe('TableAllBachesComponent', () => {
  let component: TableAllBachesComponent;
  let fixture: ComponentFixture<TableAllBachesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAllBachesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAllBachesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
