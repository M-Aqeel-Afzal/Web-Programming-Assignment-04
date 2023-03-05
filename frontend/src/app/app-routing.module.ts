import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { TableBusesComponent } from './table-buses/table-buses.component';

const routes: Routes = [
  {path:'',component:GooglemapComponent},
  {path:'',component:TableBusesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
