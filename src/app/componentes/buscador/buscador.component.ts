import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { InstrumentosService } from 'src/app/servicios/instrumentos.service'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  instrumentoBusqueda: any = [];
  termino:string;

  constructor(private activatedRoute: ActivatedRoute, private servicioInstrumento: InstrumentosService, private router:Router) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      console.log(params['termino']);
      this.termino = params['termino'];
      this.instrumentoBusqueda = this.servicioInstrumento.buscarInstrumento(params['termino']);
    });
  }

  public verInstrumentos(idx:string){ 
    this.router.navigate(['/detalle',idx]) 
  }

}
