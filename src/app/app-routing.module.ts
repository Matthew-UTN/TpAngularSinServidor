import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MapaComponent } from './componentes/mapa/mapa.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'detalle/:id', component: DetalleComponent},
  { path: 'mapa', component: MapaComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'buscar/:termino', component: BuscadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
