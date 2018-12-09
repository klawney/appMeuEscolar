import { Component, OnInit } from '@angular/core';

import { Aluno } from './aluno';


const ELEMENT_DATA: Aluno[] = [
  {id: 1, nome: 'Marianaa',  idade: 10,  pai: 'Jose',  mae: 'Roberta'},
  {id: 2, nome: 'Jose ',  idade: 10,  pai: 'Enzo',  mae: 'Maria'},
  {id: 3, nome: 'Caarina',  idade: 10,  pai: 'Jose',  mae: 'Carla'},
  {id: 4, nome: 'Tereza',  idade: 10,  pai: 'Jose',  mae: 'Francisaca'},
  {id: 5, nome: 'Sebastiao',  idade: 10,  pai: 'Jose',  mae: 'Mirstz'},
  {id: 6, nome: 'Madeline',  idade: 10,  pai: 'JHorge',  mae: 'Fabiele'},
];

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'idade', 'pai', 'mae'];
  dataSource = ELEMENT_DATA;
  constructor() {   }

  ngOnInit() {
  }

}
