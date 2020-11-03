import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantManageComponent } from './grant-manage.component';

describe('GrantManageComponent', () => {
  let component: GrantManageComponent;
  let fixture: ComponentFixture<GrantManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
