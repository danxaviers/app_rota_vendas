import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalesService } from '../service/api/sales/sales.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public total = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private salesService: SalesService
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.salesService.countTotalSales(1).subscribe(
      res => {
        console.log(res);
        this.total = res[0].total_value
      }, err => {
          console.error(err)
      }, () => {
        console.log('FINALIZADO')
      }
    );
  }

}
