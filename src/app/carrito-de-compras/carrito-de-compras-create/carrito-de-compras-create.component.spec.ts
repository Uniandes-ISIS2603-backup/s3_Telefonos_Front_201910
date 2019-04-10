import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDeComprasCreateComponent } from './carrito-de-compras-create.component';

describe('CarritoDeComprasCreateComponent', () => {
  let component: CarritoDeComprasCreateComponent;
  let fixture: ComponentFixture<CarritoDeComprasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarritoDeComprasCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoDeComprasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
