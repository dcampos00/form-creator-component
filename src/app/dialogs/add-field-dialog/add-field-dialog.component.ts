import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import {
  CareYouFormField,
  CareYouFormFieldOptions,
} from 'src/app/models/field';
import { CareYouForm } from 'src/app/models/form';
import * as uuid from 'uuid';

interface FieldType {
  name: string;
  label: string;
  hasOptions: boolean;
}

@Component({
  selector: 'careyou-add-field-dialog',
  templateUrl: './add-field-dialog.component.html',
  styleUrls: ['./add-field-dialog.component.scss'],
})
export class AddFieldDialogComponent implements OnInit {
  hasOptions = false;
  otherYesNoFields: CareYouForm = [];
  fieldOptions: CareYouFormFieldOptions[] = [];
  fieldTypes = [
    { name: 'text', label: 'Texto', hasOptions: false },
    { name: 'yes-no', label: 'Si/No', hasOptions: false },
    { name: 'double', label: 'Decimal', hasOptions: false },
    { name: 'integer', label: 'Entero', hasOptions: false },
    { name: 'checkbox', label: 'Opción Multiple', hasOptions: true },
    { name: 'choice', label: 'Opción Única', hasOptions: true },
  ];

  constructor(
    public dialogRef: MatDialogRef<AddFieldDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CareYouFormField
  ) {}

  ngOnInit(): void {
    console.log('init Dialog');
  }

  onChangeFieldType(event: MatSelectChange): void {
    this.hasOptions = event.value.hasOptions;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onAddOption(): void {
    this.fieldOptions.push({
      id: uuid.v4(),
      text: '',
      value: '',
    });
  }

  onDeleteOption(option): void {
    this.fieldOptions = this.fieldOptions.filter((o) => o.id !== option.id);
  }
}
