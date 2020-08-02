import { Component, OnInit } from '@angular/core';
import { SalesService } from '../service/api/sales/sales.service';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.scss'],
})
export class SalesHistoryComponent implements OnInit {

  sales:any; 
  
  constructor(
    private salesService: SalesService
  ) { }

  ngOnInit() {
    this.getSales();
  }

  getSales() {
    this.salesService.getByUserId(1).subscribe(
      res => {
        console.log('VENDAS', res);
        this.sales = res;
      }, err => {
        console.error(err);
      }, () => {
        console.log('FINALIZADA');
      }
    )
  }

}
