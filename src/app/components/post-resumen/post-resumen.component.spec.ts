import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostResumenComponent } from './post-resumen.component';

describe('PostResumenComponent', () => {
  let component: PostResumenComponent;
  let fixture: ComponentFixture<PostResumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostResumenComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostResumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
