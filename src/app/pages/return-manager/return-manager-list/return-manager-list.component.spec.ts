import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnManagerListComponent } from './return-manager-list.component';

describe('ReturnManagerListComponent', () => {
  let component: ReturnManagerListComponent;
  let fixture: ComponentFixture<ReturnManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnManagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
