import { Component, OnInit } from '@angular/core';

import { Pagamento } from './pagamento';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  pgto: Pagamento = {
    id_pgto: 1,
    id_contrato: 1,
    id_cliente: 1,
    mes_ref: '2018/01',
    dt_venc: new Date(),
    dt_pgto: new Date(),
    valor_mensal: 333,
    valor_desconto: 333,
    valor_multa: 333,
    valor_juros: 33,
    valor_pgto: 33
  };
  constructor() { }

  mostrar (r) {
    console.log(r);
  }
  ngOnInit() {
  }

}
