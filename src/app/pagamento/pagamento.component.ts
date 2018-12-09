import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor() { }

  mostrar (r) {
    console.log(r);
  }
  ngOnInit() {
  }

}
