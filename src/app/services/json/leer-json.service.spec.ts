import { TestBed } from '@angular/core/testing';

import { LeerJsonService } from './leer-json.service';

describe('LeerJsonService', () => {
  let service: LeerJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeerJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
