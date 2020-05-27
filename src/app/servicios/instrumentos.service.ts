import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json'

@Injectable({
  providedIn: 'root'
})
export class InstrumentosService {

  instrumentosFile:any = (data as any).default;

  constructor() {
    console.log("Funciona")
    console.log(this.instrumentosFile);
   }

   public getInstrumentos():any[]{
    console.log(this.instrumentosFile.instrumentos);
    return this.instrumentosFile.instrumentos;
   }
   public getInstrumentoId(idx:string):any{
     console.log("poop")
     console.log(this.instrumentosFile)
     for(let instrumento of this.instrumentosFile.instrumentos){
       console.log(instrumento)
       if(instrumento.id == idx){
         return instrumento;
       }
     }
   }
   public buscarInstrumento(termino:string):any[]{
     let instrumentoArray:any[]=[];
     termino = termino.toLowerCase();

     for(let instrumento of this.instrumentosFile.instrumentos){
       let nombre = instrumento.instrumento.toLowerCase();
       if(nombre.indexOf(termino)>=0){
         instrumentoArray.push(instrumento);
       }
     }
     return instrumentoArray;
   }
}
