import { FolhaCamaraFactory } from './../factory/folha-camara-factory';
import { FolhaCamara } from './../model/folha-camara';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class FolhaCamaraService {

  public constructor(private http: Http) { }

  public search(): Observable<FolhaCamara[]> {
    return this.http.get('http://api.quebraquebra.fagnerlima.pro.br/camara/folha')
      .map<any, any>((response: Response) => FolhaCamaraFactory.createFolhaList(response.json()));
  }
}
