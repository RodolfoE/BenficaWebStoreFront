import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecompraComponent } from './precompra.component';

describe('PrecompraComponent', () => {
  let component: PrecompraComponent;
  let fixture: ComponentFixture<PrecompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
