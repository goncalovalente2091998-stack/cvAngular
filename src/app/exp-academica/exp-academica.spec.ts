import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpAcademica } from './exp-academica';

describe('ExpAcademica', () => {
  let component: ExpAcademica;
  let fixture: ComponentFixture<ExpAcademica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpAcademica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpAcademica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
