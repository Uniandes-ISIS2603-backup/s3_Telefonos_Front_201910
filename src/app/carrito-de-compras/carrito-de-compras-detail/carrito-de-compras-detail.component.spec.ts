import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDeComprasDetailComponent } from './carrito-de-compras-detail.component';

describe('CarritoDeComprasDetailComponent', () => {
  let component: CarritoDeComprasDetailComponent;
  let fixture: ComponentFixture<CarritoDeComprasDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoDeComprasDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDeComprasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
