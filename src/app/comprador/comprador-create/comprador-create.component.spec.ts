import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorCreateComponent } from './comprador-create.component';

describe('CompradorCreateComponent', () => {
  let component: CompradorCreateComponent;
  let fixture: ComponentFixture<CompradorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
