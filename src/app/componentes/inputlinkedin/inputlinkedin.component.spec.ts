import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputlinkedinComponent } from './inputlinkedin.component';

describe('InputlinkedinComponent', () => {
  let component: InputlinkedinComponent;
  let fixture: ComponentFixture<InputlinkedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputlinkedinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputlinkedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
