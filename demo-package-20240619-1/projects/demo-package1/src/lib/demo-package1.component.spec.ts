import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPackage1Component } from './demo-package1.component';

describe('DemoPackage1Component', () => {
  let component: DemoPackage1Component;
  let fixture: ComponentFixture<DemoPackage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoPackage1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoPackage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
