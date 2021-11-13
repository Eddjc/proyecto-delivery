import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EmpresasComponent,
    ProductosComponent,
    MotoristasComponent,
    OrdenesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
