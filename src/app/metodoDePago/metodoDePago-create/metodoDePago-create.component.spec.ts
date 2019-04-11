import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetodoDePagoCreateComponent } from './metodoDePago-create.component';

describe('MetodoDePagoCreateComponent', () => {
  let component: MetodoDePagoCreateComponent;
  let fixture: ComponentFixture<MetodoDePagoCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetodoDePagoCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetodoDePagoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
