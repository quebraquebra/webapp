/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';

import { ModalPageService } from '.';

describe('Service: ModalPage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalPageService]
    });
  });

  it('should ...', inject([ModalPageService], (service: ModalPageService) => {
    expect(service).toBeTruthy();
  }));
});
