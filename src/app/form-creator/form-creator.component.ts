import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as uuid from 'uuid';
import { AddFieldDialogComponent } from '../dialogs/add-field-dialog/add-field-dialog.component';
import { CareYouFormField } from '../models/field';
import { CareYouForm } from '../models/form';

@Component({
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
})
export class FormCreatorComponent implements OnInit {
  public newForm: CareYouForm = {
    name: '',
    label: '',
    title: '',
    help: '',
    fields: [
      // {
      //   id: 'id1',
      //   position: 0,
      //   help: 'ayuda 1',
      //   type: {
      //     name: 'choice',
      //     label: 'Seleccion Multiple',
      //   },
      //   question: 'pregunta 1',
      //   options: [
      //     {
      //       text: 'opcion1',
      //       value: 1,
      //     },
      //     {
      //       text: 'opcion2',
      //       value: 1,
      //     },
      //   ],
      // },
    ],
  };

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onSaveForm() {
    console.log('save');
    console.log(this.newForm);
  }

  onAddField() {
    console.log('onAddField');
    const newFormField = {};

    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: '60%',
      data: {
        formField: newFormField,
        yesNoFields: this.yesNoFields,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        result.id = uuid.v4(); // crea un id unico
        this.newForm.fields.push(result);

        console.log(this.newForm);
      }
    });
  }

  onDeleteField(field) {
    this.newForm.fields = this.newForm.fields.filter((f) => f.id !== field.id);
  }

  private get yesNoFields(): CareYouFormField[] {
    return this.newForm.fields.filter((f) => f.type.name === 'yes-no');
  }
}
