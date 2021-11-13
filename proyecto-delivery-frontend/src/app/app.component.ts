import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto-delivery-frontend';

  regionVisible:string = '';

  verEmpresas(id:any){
    this.regionVisible = 'empresas'
  }

  verProductos(id:any){
    this.regionVisible = 'productos' 
  }
  verMotoristas(id:any){
    this.regionVisible = 'motoristas'  
  }
  verOrdenes(id:any){
    this.regionVisible = 'ordenes' 
   }
}
