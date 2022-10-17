import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
 
  constructor(private httpCliente: HttpClient) {}

  getExchanges(currency, initialDate, finalDate) { 
    return this.httpCliente.get(`https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=@moeda,dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@moeda='${currency}'&@dataInicial='${moment(initialDate).format('MM-DD-YYYY')}'&@dataFinalCotacao='${moment(finalDate).format('MM-DD-YYYY')}'&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`)
  }
}