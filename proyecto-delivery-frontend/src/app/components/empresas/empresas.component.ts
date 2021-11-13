import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
  }

  guardarEmpresa(){}
  
  abrirNuevaEmpresa(modal:any){  
    this.modalService.open(modal, 
      {
        size:'lg',
        centered:false
      }
    )

  }
}
