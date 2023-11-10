import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnclasePage } from './enclase.page';

describe('EnclasePage', () => {
  let component: EnclasePage;
  let fixture: ComponentFixture<EnclasePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
