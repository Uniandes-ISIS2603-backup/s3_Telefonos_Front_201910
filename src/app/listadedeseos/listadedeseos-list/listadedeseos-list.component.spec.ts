import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadedeseosListComponent } from './listadedeseos-list.component';

describe('ListadedeseosListComponent', () => {
  let component: ListadedeseosListComponent;
  let fixture: ComponentFixture<ListadedeseosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadedeseosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadedeseosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
