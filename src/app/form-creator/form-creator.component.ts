import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { AddFieldDialogComponent } from '../dialogs/add-field-dialog/add-field-dialog.component';
import { CareYouForm } from '../models/form';

@Component({
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
})
export class FormCreatorComponent implements OnInit {
  public form: CareYouForm = [
    {
      id: 'id1',
      position: 0,
      help: 'ayuda 1',
      type: {
        name: 'choice',
        label: 'Seleccion Multiple',
      },
      question: 'pregunta 1',
      options: [
        {
          text: 'opcion1',
          value: 1,
        },
        {
          text: 'opcion2',
          value: 1,
        },
      ],
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onSaveForm() {
    console.log('save');
  }

  onAddField() {
    console.log('onAddField');
    const newFormField = {};

    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: '60%',
      data: newFormField,
    });

    dialogRef.afterClosed().subscribe((result) => {
      result.id = uuid.v4();

      this.form.push(result);
    });
  }

  onDeleteField(field) {
    this.form = this.form.filter((f) => f.id !== field.id);
  }
}
