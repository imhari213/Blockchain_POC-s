import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelandingComponent } from './homelanding.component';

describe('HomelandingComponent', () => {
  let component: HomelandingComponent;
  let fixture: ComponentFixture<HomelandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomelandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
