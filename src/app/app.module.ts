import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFieldDialogComponent } from './dialogs/add-field-dialog/add-field-dialog.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormCreatorComponent, AddFieldDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
  ],
  entryComponents: [FormCreatorComponent, AddFieldDialogComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const custom = createCustomElement(FormCreatorComponent, {
      injector,
    });

    customElements.define('careyou-form-creator', custom);
  }

  ngDoBootstrap() {}
}
