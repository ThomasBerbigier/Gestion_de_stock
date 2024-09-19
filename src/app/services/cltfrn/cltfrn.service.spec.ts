import { TestBed } from '@angular/core/testing';

import { CltfrnService } from './cltfrn.service';

describe('CltfrnService', () => {
  let service: CltfrnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CltfrnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
