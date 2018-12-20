import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ViewChild } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
 // { path: 'aluno/:id',      component: HeroDetailComponent },
  {
    path: 'alunos',
    component: AlunosComponent,
    data: { title: 'Lista de Alunos' }
  },
  {
    path: 'pagamento',
    component: PagamentoComponent,
    data: { title: 'Pagamento' }
  },
  { path: '',
    redirectTo: '/alunos',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    PagamentoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
