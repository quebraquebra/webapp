import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { FolhaCamara, FolhaCamaraFactory } from '.';
import { UrlService } from '../shared/service/url.service';

import { Observable } from 'rxjs/Rx';

export interface FolhaCamaraFilter {
  limit: number,
  page: number,
  sort: string,
  order: string,
  ano: number,
  mes: number,
  nome: string,
  vinculo: string,
  cargo: string
}

@Injectable()
export class FolhaCamaraService {

  public constructor(private http: Http) { }

  public search(filter: FolhaCamaraFilter): Observable<{ total: number, result: Array<FolhaCamara> }> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', filter.limit.toString());
    params.set('page', filter.page.toString());
    params.set('sort', filter.sort.toString());
    params.set('order', filter.order.toString());
    params.set('ano', filter.ano.toString());
    params.set('mes', filter.mes.toString());
    params.set('nome', filter.nome);
    params.set('vinculo', filter.vinculo);
    params.set('cargo', filter.cargo);

    return this.http.get(UrlService.mountApiUrl('camara/folha'), { search: params })
      .map<any, any>((response: Response) => {
        return {
          total: response.json()['total'],
          result: FolhaCamaraFactory.createFolhaList(response.json()['result'])
        }
      });
  }
}
