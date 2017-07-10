import { Injectable } from '@angular/core';

// const urlApi = 'http://api.quebraquebra.fagnerlima.pro.br';
const apiUrl = 'http://api.quebraquebra.dev';

@Injectable()
export class UrlService {

  public static mountApiUrl(route: string): string {
    return `${apiUrl}/${route}`;
  }
}
