import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeLogosComponent } from './fake-logos.component';

describe('FakeLogosComponent', () => {
  let component: FakeLogosComponent;
  let fixture: ComponentFixture<FakeLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeLogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeLogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
