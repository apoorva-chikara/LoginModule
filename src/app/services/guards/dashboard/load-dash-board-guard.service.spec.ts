import { TestBed } from '@angular/core/testing';

import { LoadDashBoardGuardService } from './load-dash-board-guard.service';

describe('LoadDashBoardGuardService', () => {
  let service: LoadDashBoardGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadDashBoardGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
