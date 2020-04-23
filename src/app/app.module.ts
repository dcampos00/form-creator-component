import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFieldDialogComponent } from './dialogs/add-field-dialog/add-field-dialog.component';
import { FormCreatorComponent } from './form-creator/form-creator.component';

@NgModule({
  declarations: [FormCreatorComponent, AddFieldDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatTooltipModule,
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
