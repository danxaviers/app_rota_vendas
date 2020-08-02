import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UtilService {

  public user: any;
  public place: any;

  constructor() { }
  
  

  getUrl() {
    this.place = 1;
    // Acesso ao raven_erp_db em Homologação/Produção
    if (this.place === 1) {
      return 'https://cloud.corvostecnologia.com.br/hookahz-api/public/api/';
    }
    // Acesso ao raven_erp_db em Homologação/Produção
    if (this.place === 2) {
      return 'http://31.220.54.243/raven_erp_api/public/api/';
    }
    // Acesso ao raven_erp_db localmente
    if (this.place === 3) {
      return 'http://localhost:8000/api/';
    }
  }

  getDateForBD() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    return  yyyy + '-' + mm + '-' + dd;
  }

  normalizeString(words){
    const str = words;
    const parsed = str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '');
    return parsed;
  }
}
