import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGithubComponent } from './input-github.component';

describe('InputGithubComponent', () => {
  let component: InputGithubComponent;
  let fixture: ComponentFixture<InputGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
