import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantSearchComponent } from './grant-search.component';

describe('GrantSearchComponent', () => {
  let component: GrantSearchComponent;
  let fixture: ComponentFixture<GrantSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
