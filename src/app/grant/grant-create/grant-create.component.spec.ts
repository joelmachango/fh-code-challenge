import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantCreateComponent } from './grant-create.component';

describe('GrantCreateComponent', () => {
  let component: GrantCreateComponent;
  let fixture: ComponentFixture<GrantCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
