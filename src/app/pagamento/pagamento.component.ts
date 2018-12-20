import { Component, OnInit } from '@angular/core';

import { Pagamento } from './pagamento';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  pgto: Pagamento[] ;

  hoje = new Date();
  // formPgto = new FormGroup({
  //   id_pgto: new FormControl('')
  // });

  formPgto = this.formBuilder.group({
    id_pgto: [null, Validators.required],
    id_contrato: [null, Validators.required],
    id_cliente: [null, Validators.required],
    mes_ref: [null, Validators.required],
    dt_venc: [null, Validators.required],
    dt_pgto: [null, Validators.required],
    valor_mensal: [null, Validators.required],
    valor_desconto: [null, Validators.required],
    valor_multa: [null, Validators.required],
    valor_juros: [null, Validators.required],
    valor_pgto: [null, Validators.required]
  });

  mostrar (r) {
    console.log(r);
  }
  ngOnInit() {
    console.log(this);
  }

}
