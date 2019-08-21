import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciosConfPage } from './espacios-conf.page';

describe('EspaciosConfPage', () => {
  let component: EspaciosConfPage;
  let fixture: ComponentFixture<EspaciosConfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspaciosConfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaciosConfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
