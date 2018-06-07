import { TestBed, inject } from '@angular/core/testing';

import { ServicoCompartilhado } from './servico-compartilhado.service';

describe('ServicoCompartilhadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicoCompartilhado]
    });
  });

  it('should be created', inject([ServicoCompartilhado], (service: ServicoCompartilhado) => {
    expect(service).toBeTruthy();
  }));
});
