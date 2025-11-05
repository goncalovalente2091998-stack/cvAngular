import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpProfissional } from './exp-profissional';

describe('ExpProfissional', () => {
  let component: ExpProfissional;
  let fixture: ComponentFixture<ExpProfissional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpProfissional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpProfissional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
