import { Component } from '@angular/core';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;

  constructor(private paisesService: PaisesService) { }

  buscar(){
    this.hayError = false;
    this.paisesService.buscarPais(this.termino)
                      .subscribe({
                        next: (paises) =>{
                          console.log(paises);
                          this.hayError = false;
                        },
                        error: (error) =>{
                          console.log(error);
                          this.hayError = true;
                        }
                      });
  }
}
