import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { UtilService } from '../../util/util.service';


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  private api_url: any;

  constructor(
    private utilService: UtilService,
    private http: HttpClient
  ) {
    this.api_url = utilService.getUrl();
  }

  countTotalSales(id): any{
    
    return this.http.get(this.api_url + 'sales/user/totalsales/' + id);
  }

  getByBussinesId(id): any {
    return this.http.get(this.api_url + 'sales/bussiness/' + id);
  }

  getByUserId(id): any {
    return this.http.get(this.api_url + 'sales/user/' + id);
  }
}
