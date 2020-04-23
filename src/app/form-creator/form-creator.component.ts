import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddFieldDialogComponent } from '../dialogs/add-field-dialog/add-field-dialog.component';
import { CareYouForm } from '../models/form';

@Component({
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
})
export class FormCreatorComponent implements OnInit {
  public form: CareYouForm;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onAddField() {
    console.log('onAddField');
    const dialogRef = this.dialog.open(AddFieldDialogComponent, {
      width: '80%',
      data: { id: 'hola' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
