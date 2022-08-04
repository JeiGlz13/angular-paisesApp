import { Component } from '@angular/core';
import { Country } from '../../interfaces/countriesResponse.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];


  constructor(private paisesService: PaisesService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisesService.buscarCapital(this.termino)
                      .subscribe({
                          next: (paisesRes) => {
                            this.paises = paisesRes;
                            this.hayError = false;
                          },
                          error: (error) => {
                            console.log(error);
                            this.hayError = true;
                            this.paises = []
                          }
                      });
  }
}
