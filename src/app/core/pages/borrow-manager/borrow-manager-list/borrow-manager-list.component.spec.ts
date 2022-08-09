import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowManagerListComponent } from './borrow-manager-list.component';

describe('BorrowManagerListComponent', () => {
  let component: BorrowManagerListComponent;
  let fixture: ComponentFixture<BorrowManagerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowManagerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowManagerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
