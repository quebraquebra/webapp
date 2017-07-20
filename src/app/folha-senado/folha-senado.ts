import { GenericTableData } from '../shared/generic-table';

export class FolhaSenado implements GenericTableData {

  public static fromJson(folhaJson: FolhaSenado): FolhaSenado {
    return new FolhaSenado(
      folhaJson.id,
      folhaJson.tipo,
      folhaJson.ano,
      folhaJson.mes,
      folhaJson.servidor,
      folhaJson.anoAdmissao,
      folhaJson.vinculo,
      folhaJson.cargo,
      folhaJson.padrao,
      folhaJson.especialidade,
      folhaJson.situacao,
      folhaJson.remuneracaoBasica,
      folhaJson.vantagensPessoais,
      folhaJson.funcaoCargoComissao,
      folhaJson.gratificacaoNatalina,
      folhaJson.horasExtras,
      folhaJson.outrasRemuneracoesEventuais,
      folhaJson.adicionalPericulosidade,
      folhaJson.adicionalNoturno,
      folhaJson.abonoPermanencia,
      folhaJson.reversaoTetoConstitucional,
      folhaJson.impostoRenda,
      folhaJson.psss,
      folhaJson.faltas,
      folhaJson.diarias,
      folhaJson.auxilioAlimentacao,
      folhaJson.outrasVantagensIndenizatorias,
      folhaJson.licencaPremio
    );
  }

  public constructor(
    private _id: number,
    private _tipo: string,
    private _ano: number,
    private _mes: number,
    private _servidor: string,
    private _anoAdmissao: number,
    private _vinculo: string,
    private _cargo: string,
    private _padrao: string,
    private _especialidade: string,
    private _situacao: string,
    private _remuneracaoBasica: number,
    private _vantagensPessoais: number,
    private _funcaoCargoComissao: number,
    private _gratificacaoNatalina: number,
    private _horasExtras: number,
    private _outrasRemuneracoesEventuais: number,
    private _adicionalPericulosidade: number,
    private _adicionalNoturno: number,
    private _abonoPermanencia: number,
    private _reversaoTetoConstitucional: number,
    private _impostoRenda: number,
    private _psss: number,
    private _faltas: number,
    private _diarias: number,
    private _auxilioAlimentacao: number,
    private _outrasVantagensIndenizatorias: number,
    private _licencaPremio: number
  ) { }

  public get remuneracaoAposDescontosObrigatorios(): number {
    return this.remuneracaoBasica + this.vantagensPessoais + this.vantagensEventuais + this.abonoPermanencia + this.descontosObrigatorios;
  }

  public get vantagensEventuais(): number {
    return this.funcaoCargoComissao + this.gratificacaoNatalina + this.horasExtras + this.outrasRemuneracoesEventuais;
  }

  public get descontosObrigatorios(): number {
    return this.reversaoTetoConstitucional + this.impostoRenda + this.psss + this.faltas;
  }

  public get id(): number {
    return this._id;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get ano(): number {
    return this._ano;
  }

  public get mes(): number {
    return this._mes;
  }

  public get servidor(): string {
    return this._servidor;
  }

  public get anoAdmissao(): number {
    return this._anoAdmissao;
  }

  public get vinculo(): string {
    return this._vinculo;
  }

  public get cargo(): string {
    return this._cargo;
  }

  public get padrao(): string {
    return this._padrao;
  }

  public get especialidade(): string {
    return this._especialidade;
  }

  public get situacao(): string {
    return this._situacao;
  }

  public get remuneracaoBasica(): number {
    return this._remuneracaoBasica;
  }

  public get vantagensPessoais(): number {
    return this._vantagensPessoais;
  }

  public get funcaoCargoComissao(): number {
    return this._funcaoCargoComissao;
  }

  public get gratificacaoNatalina(): number {
    return this._gratificacaoNatalina;
  }

  public get horasExtras(): number {
    return this._horasExtras;
  }

  public get outrasRemuneracoesEventuais(): number {
    return this._outrasRemuneracoesEventuais;
  }

  public get adicionalPericulosidade(): number {
    return this._adicionalPericulosidade;
  }

  public get adicionalNoturno(): number {
    return this._adicionalNoturno;
  }

  public get abonoPermanencia(): number {
    return this._abonoPermanencia;
  }

  public get reversaoTetoConstitucional(): number {
    return this._reversaoTetoConstitucional;
  }

  public get impostoRenda(): number {
    return this._impostoRenda;
  }

  public get psss(): number {
    return this._psss;
  }

  public get faltas(): number {
    return this._faltas;
  }

  public get diarias(): number {
    return this._diarias;
  }

  public get auxilioAlimentacao(): number {
    return this._auxilioAlimentacao;
  }

  public get outrasVantagensIndenizatorias(): number {
    return this._outrasVantagensIndenizatorias;
  }

  public get licencaPremio(): number {
    return this._licencaPremio;
  }
}
