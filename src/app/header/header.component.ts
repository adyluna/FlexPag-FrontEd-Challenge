import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ExchangesService } from '../services/exchanges.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public exchangeService: ExchangesService) { }

  headerText:string = 'Histórico de cotação'

  currency = "AUD"
  initialDate = ''
  finalDate = ''

  changeCurrency(e) {
    this.currency=e.target.value
  }

  changeInitialDate(e) {
    this.initialDate=e.target.value
  }

  changeFinalDate(e) {
    this.finalDate=e.target.value
  }

  currencies: object[] = [
    {
      "ID": "AUD",
      "TEXT": "Dólar australiano"
    },
    {
      "ID": "CAD",
      "TEXT": "Dólar canadense"
    },
    {
      "ID": "EUR",
      "TEXT": "Euro"
    },
    {
      "ID": "USD",
      "TEXT": "Dólar dos Estados Unidos"
    }
  ]

  data: any

  onClick() {
    if (!this.currency || !this.initialDate || !this.finalDate) {
      return alert('Você precisa preencher todos os campos!')
    }

    if (this.initialDate >= this.finalDate) {
      return alert('A data final precisa ser maior que a inicial!')
    }

    this.exchangeService.getExchanges(this.currency, this.initialDate, this.finalDate).subscribe(data => {
      this.data = data;
    });
  }

  ngOnInit(): void {
  }
}
