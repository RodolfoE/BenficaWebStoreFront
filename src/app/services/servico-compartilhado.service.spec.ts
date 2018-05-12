import { TestBed, inject } from '@angular/core/testing';

import { ProdutosInChartService } from './servico-compartilhado.service';

describe('ServicoCompartilhadoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosInChartService]
    });
  });

  it('should be created', inject([ProdutosInChartService], (service: ProdutosInChartService) => {
    expect(service).toBeTruthy();
  }));
});
