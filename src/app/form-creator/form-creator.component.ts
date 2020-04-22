import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.scss'],
})
export class FormCreatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onShowMessage(): void {
    alert('Mensage');
  }
}
