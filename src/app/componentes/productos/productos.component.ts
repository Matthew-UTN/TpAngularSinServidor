import { Component, OnInit } from '@angular/core';
import { InstrumentosService } from 'src/app/servicios/instrumentos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  instrumentoArray:any[]=[];

  constructor(private serviciosInstrumentos: InstrumentosService, private router:Router) { }

  ngOnInit(): void {
    this.instrumentoArray = this.serviciosInstrumentos.getInstrumentos(); 
    console.log(this.instrumentoArray);
  }

  public verInstrumento(idx:string){
    this.router.navigate(['/detalle',idx]);
  }

}
