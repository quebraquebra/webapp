import { Injectable } from '@angular/core';

import { environment } from './../../../environments/environment';

const apiUrlProd = 'http://api.quebraquebra.fagnerlima.pro.br';
const apiUrlDev = 'http://api.quebraquebra.dev';

@Injectable()
export class UrlService {

  public static mountApiUrl(route: string): string {
    return `${environment.production ? apiUrlProd : apiUrlDev}/${route}`;
  }
}