import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadedeseosCrearComponent } from './listadedeseos-crear.component';

describe('ListadedeseosCrearComponent', () => {
  let component: ListadedeseosCrearComponent;
  let fixture: ComponentFixture<ListadedeseosCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadedeseosCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadedeseosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
