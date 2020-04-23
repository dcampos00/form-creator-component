import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { CareYouFormField } from 'src/app/models/field';
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
  formField: CareYouFormField;
  otherYesNoFields: CareYouFormField[] = [];
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
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formField = data.formField;
    this.otherYesNoFields = data.yesNoFields;
  }

  ngOnInit(): void {
    console.log('init Dialog');
  }

  onChangeFieldType(event: MatSelectChange): void {
    this.hasOptions = event.value.hasOptions;

    if (this.hasOptions) {
      if (
        this.formField.options === undefined ||
        this.formField.options.length === 0
      ) {
        this.onAddOption();
        this.onAddOption();
      }
    } else {
      delete this.formField.options;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(form): void {
    console.log(form);
  }

  onAddOption(): void {
    if (this.formField.options === undefined) {
      this.formField.options = [];
    }

    this.formField.options.push({
      id: uuid.v4(),
      text: '',
      value: '',
    });
  }

  onDeleteOption(option): void {
    this.formField.options = this.formField.options.filter(
      (o) => o.id !== option.id
    );
  }
}
