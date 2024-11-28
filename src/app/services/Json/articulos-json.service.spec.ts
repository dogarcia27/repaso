import { TestBed } from '@angular/core/testing';

import { ArticulosJsonService } from './articulos-json.service';

describe('ArticulosJsonService', () => {
  let service: ArticulosJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulosJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
