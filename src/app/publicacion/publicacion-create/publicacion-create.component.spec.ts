import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionCreateComponent } from './publicacion-create.component';

describe('PublicacionCreateComponent', () => {
  let component: PublicacionCreateComponent;
  let fixture: ComponentFixture<PublicacionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
