import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countriesResponse.interface';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
})
export class TablaComponent {
  @Input() paises: Country[] = [];

  constructor() { }


}
