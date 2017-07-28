import { GenericTableData } from '../../shared/generic-table';

export class FolhaCamara implements GenericTableData {

  public static fromJson(folhaJson: FolhaCamara): FolhaCamara {
    return new FolhaCamara(
      folhaJson.id,
      folhaJson.mes,
      folhaJson.ano,
      folhaJson.cargo,
      folhaJson.vinculo,
      folhaJson.servidor,
      folhaJson.remuneracaoFixa,
      folhaJson.vantagensPessoais,
      folhaJson.remuneracaoEventual,
      folhaJson.abonoPermanencia,
      folhaJson.descontos,
      folhaJson.outrosDiarias,
      folhaJson.outrosAuxilios,
      folhaJson.outrosVantagens
    );
  }

  public constructor(
    private _id: number,
    private _mes: number,
    private _ano: number,
    private _cargo: string,
    private _vinculo: string,
    private _servidor: string,
    private _remuneracaoFixa: number,
    private _vantagensPessoais: number,
    private _remuneracaoEventual: number,
    private _abonoPermanencia: number,
    private _descontos: number,
    private _outrosDiarias: number,
    private _outrosAuxilios: number,
    private _outrosVantagens: number
  ) { }

  public get id(): number {
    return this._id;
  }

  public get mes(): number {
    return this._mes;
  }

  public get ano(): number {
    return this._ano;
  }

  public get cargo(): string {
    return this._cargo;
  }

  public get vinculo(): string {
    return this._vinculo;
  }

  public get servidor(): string {
    return this._servidor;
  }

  public get remuneracaoFixa(): number {
    return this._remuneracaoFixa;
  }

  public get vantagensPessoais(): number {
    return this._vantagensPessoais;
  }

  public get remuneracaoEventual(): number {
    return this._remuneracaoEventual;
  }

  public get abonoPermanencia(): number {
    return this._abonoPermanencia;
  }

  public get descontos(): number {
    return this._descontos;
  }

  public get outrosDiarias(): number {
    return this._outrosDiarias;
  }

  public get outrosAuxilios(): number {
    return this._outrosAuxilios;
  }

  public get outrosVantagens(): number {
    return this._outrosVantagens;
  }
}
