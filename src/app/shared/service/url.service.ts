import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

const apiUrlProd = 'http://api.quebraquebra.lsd.ufcg.edu.br';
const apiUrlDev = 'http://api.quebraquebra.dev';
const d3Url = 'http://quebraquebra.lsd.ufcg.edu.br/graficos';

@Injectable()
export class UrlService {

  public static mountApiUrl(route: string): string {
    return `${environment.production ? apiUrlProd : apiUrlDev}/${route}`;
  }

  public static mountGraficosUrl(route: string): string {
    return `${d3Url}/${route}`;
  }
}
