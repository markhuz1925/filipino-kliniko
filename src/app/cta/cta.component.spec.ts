import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaComponent } from './cta.component';

describe('CtaComponent', () => {
  let component: CtaComponent;
  let fixture: ComponentFixture<CtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});