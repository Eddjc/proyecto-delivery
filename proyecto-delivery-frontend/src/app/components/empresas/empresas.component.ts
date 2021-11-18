import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private modalService:NgbModal, private categoriasService:CategoriasService) { }

  categorias:any = [];
  empresas: any =[];
  categoriaSeleccionada:any;

  formularioRegistroEmpresa = new FormGroup(
    {
      logo:new FormControl('', [Validators.required]),
      nombreEmpresa:new FormControl('', [Validators.required]),
      banner:new FormControl('', [Validators.required]),
      descripcion:new FormControl('', [Validators.required]),
      categoria:new FormControl('',[Validators.required])
    }
  )

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias().subscribe(res=>{
      
      this.categorias = res;
      console.log('Categorias: ', this.categorias);
    },
    error=>{
      console.log(error);
    }
    );
  }

  seleccionarCategoria(){
    console.log('categoria seleccionada', this.categoriaSeleccionada);
    this.categoriasService.obtenerEmpresas(this.categoriaSeleccionada).subscribe(res=>{
      this.empresas = res.empresas;
      console.log('empresas segun categoria: ', this.empresas);
    },
    error=>{
      console.log(error);
    });
  }


  guardarEmpresa(){
    console.log('id categoria a guardar',this.categoriaSeleccionada);
    console.log('empresa a guardar: ',this.formularioRegistroEmpresa.value);
    this.categoriasService.guardarEmpresa(this.categoriaSeleccionada,this.formularioRegistroEmpresa.value
    ).subscribe(res=>{
      console.log(res);
        this.modalService.dismissAll();
        this.empresas.push(res)
    },error=>console.log(error));
    
  }

  EditarEmpresa(){}
  
  eliminarEmpresa(){}

  abrirNuevaEmpresa(modal:any){  
    this.modalService.open(modal, 
      {
        size:'mg',
        centered:false
      }
    )

  }
  abrirEditarEmpresa(modal:any){
    this.modalService.open(modal,
      {
        size:'lg',
        centered:false
      })
  }
}
