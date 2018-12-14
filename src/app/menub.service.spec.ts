import { TestBed } from '@angular/core/testing';

import { MenubService } from './menub.service';

describe('MenubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenubService = TestBed.get(MenubService);
    expect(service).toBeTruthy();
  });
});
