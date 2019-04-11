import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoDePagoDetailComponent } from './metodoDePago-detail.component';

describe('FacturaDetailComponent', () => {
  let component: MetodoDePagoDetailComponent;
  let fixture: ComponentFixture<MetodoDePagoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoDePagoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoDePagoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
