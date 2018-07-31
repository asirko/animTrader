import { TestBed, inject } from '@angular/core/testing';

import { AnimService } from './anim.service';

describe('AnimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimService]
    });
  });

  it('should be created', inject([AnimService], (service: AnimService) => {
    expect(service).toBeTruthy();
  }));
});
