import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilConfPage } from './perfil-conf.page';

describe('PerfilConfPage', () => {
  let component: PerfilConfPage;
  let fixture: ComponentFixture<PerfilConfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilConfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilConfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
