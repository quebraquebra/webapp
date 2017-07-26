/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { FolhaSenadoService } from './folha-senado.service';

describe('Service: FolhaSenado', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FolhaSenadoService]
    });
  });

  it('should ...', inject([FolhaSenadoService], (service: FolhaSenadoService) => {
    expect(service).toBeTruthy();
  }));
});
