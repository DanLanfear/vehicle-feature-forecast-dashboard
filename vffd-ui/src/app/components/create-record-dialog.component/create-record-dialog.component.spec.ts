import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecordDialogComponent } from './create-record-dialog.component';

describe('CreateRecordDialogComponent', () => {
  let component: CreateRecordDialogComponent;
  let fixture: ComponentFixture<CreateRecordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRecordDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateRecordDialogComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
