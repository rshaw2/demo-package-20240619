import { TestBed } from '@angular/core/testing';

import { DemoPackage1Service } from './demo-package1.service';

describe('DemoPackage1Service', () => {
  let service: DemoPackage1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoPackage1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
