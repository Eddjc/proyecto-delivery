import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() onVerEmpresa = new EventEmitter(); 
  @Output() onVerProducto = new EventEmitter(); 
  @Output() onVerMotorista = new EventEmitter(); 
  @Output() onVerOrdenes = new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }

  verEmpresas(id:any){
   this.onVerEmpresa.emit(id); 
  }
  verProductos(id:any){
    this.onVerProducto.emit(id); 
  }
  verMotoristas(id:any){
    this.onVerMotorista.emit(id); 
  }
  verOrdenes(id:any){
    this.onVerOrdenes.emit(id); 
  }

}
