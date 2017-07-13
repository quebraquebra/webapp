import { GtConfig, GtTexts, GtExpandedRow } from '@angular-generic-table/core';

export const gtTexts: { [lang: string]: GtTexts } = {
  'pt-BR': {
    loading: 'Carregando...',
    noData: 'Nenhum registro encontrado',
    noMatchingData: 'Nenhum registro correspondente',
    noVisibleColumnsHeading: 'Nenhum título de coluna visível',
    noVisibleColumns: 'Nenhuma coluna visível',
    tableInfo: 'Exibindo #recordFrom a #recordTo de #recordsAfterSearch registros.',
    tableInfoAfterSearch: `Exibindo #recordFrom a #recordTo de #recordsAfterSearch registros
      (filtrados de um total de #recordsAll registros).`,
    csvDownload: 'Download CSV',
    sortLabel: 'Ordenar:',
    paginateNext: 'Próxima página',
    paginatePrevious: 'Página anterior',
    inlineEditEdited: 'Edição em linha editada',
  }
}

export interface GenericTableConfig extends GtConfig<any> { }

export interface GenericTableFilter {

  limit: number,
  page: number,
  sort: string,
  order: string
}

export interface GenericTableData { }

export abstract class GenericTableExpandedRow extends GtExpandedRow<any> { }
