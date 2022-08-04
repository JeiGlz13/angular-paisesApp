import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/countriesResponse.interface';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Country;

  constructor(private activatedRoute: ActivatedRoute, private paisesService: PaisesService) { }

  ngOnInit(): void {
    this.activatedRoute.params
        .pipe(
          switchMap(({idPais})=> this.paisesService.buscarPorCodigo(idPais)),
          tap(console.log)
        )
        .subscribe(resp =>{
          this.pais = resp[0];
        })
  }

}
