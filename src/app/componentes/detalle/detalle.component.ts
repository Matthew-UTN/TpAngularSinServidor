import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  instrumento:any;

  constructor(private activatedRoute: ActivatedRoute, private servicioInstrumento: InstrumentosService) { 

  this.activatedRoute.params.subscribe(params =>{
    console.log(params['id'])
    this.instrumento = this.servicioInstrumento.getInstrumentoId(params['id'])
    console.log(this.instrumento)
  })
  }
  ngOnInit(): void {
  }

}
