import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { FolhaSenado, FolhaSenadoFactory } from '.';
import { UrlService } from '../../shared/service/url.service';
import { GenericTableService, GenericTableFilter } from '../../shared/generic-table';

export interface FolhaSenadoFilter extends GenericTableFilter {

  ano: string,
  mes: string,
  servidor: string,
  vinculo: string,
  cargo: string
}

@Injectable()
export class FolhaSenadoService implements GenericTableService {

  public constructor(private http: Http) { }

  public search(filter: FolhaSenadoFilter): Observable<{ total: number, result: Array<FolhaSenado> }> {
    const params: URLSearchParams = new URLSearchParams();
    params.set('limit', filter.limit.toString());
    params.set('page', filter.page.toString());
    params.set('sort', filter.sort.toString());
    params.set('order', filter.order.toString());
    params.set('ano', filter.ano.toString());
    params.set('mes', filter.mes.toString());
    params.set('servidor', filter.servidor);
    params.set('vinculo', filter.vinculo);
    params.set('cargo', filter.cargo);

    return this.http.get(UrlService.mountApiUrl('senado/folha'), { search: params })
      .map<any, any>((response: Response) => {
        return {
          total: response.json()['total'],
          result: FolhaSenadoFactory.createFolhaList(response.json()['result'])
        }
      });
  }
}
