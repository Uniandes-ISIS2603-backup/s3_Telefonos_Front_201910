import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDeComprasListComponent } from './carrito-de-compras-list.component';

describe('CarritoDeComprasListComponent', () => {
  let component: CarritoDeComprasListComponent;
  let fixture: ComponentFixture<CarritoDeComprasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoDeComprasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDeComprasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
