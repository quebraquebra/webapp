import { Observable } from 'rxjs/Rx';
import { GenericTableFilter, GenericTableData } from '.';

export interface GenericTableService {

  search(filter: GenericTableFilter): Observable<{ total: number, result: Array<GenericTableData> }>;
}
