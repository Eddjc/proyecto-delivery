import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient:HttpClient) { }

  obtenerCategorias():Observable<any>{
    return this.httpClient.get('http://localhost:3000/categorias')
  }

  obtenerEmpresas(categoria:any):Observable<any>{
    return this.httpClient.get(`http://localhost:3000/categorias/${categoria}/empresas`);
  }

  guardarEmpresa(idCategoria:any,formularioRegistroEmpresa:any): Observable<any>{
    return this.httpClient.post(`http://localhost:3000/categorias/${idCategoria}/empresas`, 
    {
      nombreEmpresa: formularioRegistroEmpresa.nombreEmpresa,
      logo: formularioRegistroEmpresa.logo,
      banner:formularioRegistroEmpresa.banner,
      descripcion: formularioRegistroEmpresa.descripcion
      
    }
     
  );
  }
}
