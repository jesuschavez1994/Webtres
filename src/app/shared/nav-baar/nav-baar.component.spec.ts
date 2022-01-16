import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBaarComponent } from './nav-baar.component';

describe('NavBaarComponent', () => {
  let component: NavBaarComponent;
  let fixture: ComponentFixture<NavBaarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBaarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
