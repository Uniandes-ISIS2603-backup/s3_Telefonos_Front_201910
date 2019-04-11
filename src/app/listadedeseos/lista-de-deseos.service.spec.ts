import { TestBed } from '@angular/core/testing';

import { ListaDeDeseosService } from './lista-de-deseos.service';

describe('ListaDeDeseosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaDeDeseosService = TestBed.get(ListaDeDeseosService);
    expect(service).toBeTruthy();
  });
});
