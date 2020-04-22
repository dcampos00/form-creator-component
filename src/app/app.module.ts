import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { FormCreatorComponent } from './form-creator/form-creator.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [FormCreatorComponent],
  imports: [BrowserModule],
  entryComponents: [FormCreatorComponent],
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
