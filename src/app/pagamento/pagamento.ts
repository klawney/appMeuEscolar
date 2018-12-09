export class Pagamento {
    id_pgto: Number;
    id_contrato: Number;
    id_cliente: Number;
    mes_ref: String;
    dt_venc: Date;
    dt_pgto: Date;
    valor_mensal: Number;
    valor_desconto: Number;
    valor_multa: Number;
    valor_juros: Number;
    valor_pgto: Number;
}
