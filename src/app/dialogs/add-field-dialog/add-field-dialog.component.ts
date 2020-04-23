import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CareYouFormField } from 'src/app/models/field';

@Component({
  selector: 'careyou-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss'],
})
export class AddFieldDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CareYouFormField
  ) {}

  ngOnInit(): void {
    console.log('init Dialog');
  }

  onNoClick() {
    console.log('noclieck');
    this.dialogRef.close();
  }
}
