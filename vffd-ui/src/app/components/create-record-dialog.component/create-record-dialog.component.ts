import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-create-record-dialog.component',
  imports: [
    MatDialogActions,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogContent,
    MatButton,
    MatInput,
    MatDialogTitle,
  ],
  templateUrl: './create-record-dialog.component.html',
  styleUrl: './create-record-dialog.component.scss',
})
export class CreateRecordDialogComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateRecordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.form = this.fb.group({
      id: [null],
      vehicleModel: ['', Validators.required],
      modelYear: [2026, Validators.required],
      region: ['', Validators.required],
      quarter: ['', Validators.required],
      featureCode: ['', Validators.required],
      featureName: ['', Validators.required],
      projectedVolume: [0, Validators.required],
      adoptionRate: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
      lastUpdatedBy: ['manual'],
    });
  }

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value); // return new row
    }
  }

  cancel() {
    this.dialogRef.close(null);
  }
}
