import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBillComponent } from './save-bill.component';

describe('SaveBillComponent', () => {
  let component: SaveBillComponent;
  let fixture: ComponentFixture<SaveBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
