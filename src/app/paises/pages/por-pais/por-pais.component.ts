import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { Country } from '../../interfaces/countriesResponse.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisesService: PaisesService) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;
    this.paisesService.buscarPais(this.termino)
                      .subscribe({
                        next: (paisesRes) =>{
                          this.paises = paisesRes;
                          this.hayError = false;
                        },
                        error: (error) =>{
                          console.log(error);
                          this.hayError = true;
                          this.paises = [];
                        }
                      });
  }

  sugerencias(termino: string){
    this.hayError = false;
    //TODO: Crear sugerencia: 
  }
}
