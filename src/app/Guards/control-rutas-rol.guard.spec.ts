import { TestBed } from '@angular/core/testing';

import { ControlRutasRolGuard } from './control-rutas-rol.guard';

describe('ControlRutasRolGuard', () => {
  let guard: ControlRutasRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ControlRutasRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
