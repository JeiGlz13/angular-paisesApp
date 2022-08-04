import { Component } from '@angular/core';
import { Country } from '../../interfaces/countriesResponse.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right: 0.5rem;
      }
    `
  ]
})
export class PorRegionComponent {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisesService: PaisesService) { }

  getClaseCSS(region: string): string{
    return `btn ${(region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'}` ;
  }

  activarRegion(region: string){
    this.hayError = false;

    if (this.regionActiva === region) {return;}

    this.regionActiva = region;
    this.paises = [];

    this.paisesService.buscarPorRegion(region)
                      .subscribe({
                        next: (paisesResp) => {
                          this.paises = paisesResp;
                        },
                        error: (error) =>{
                          console.log(error);
                          this.hayError = true;
                          this.paises = [];
                        }
                      })
  }
}
