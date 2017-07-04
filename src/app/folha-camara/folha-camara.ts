export class FolhaCamara {

  public static fromJson(folhaJson: FolhaCamara): FolhaCamara {
    return new FolhaCamara(
      folhaJson.id,
      folhaJson.nome,
      folhaJson.folhaPagamento,
      folhaJson.ano,
      folhaJson.mes,
      folhaJson.vinculo,
      folhaJson.cargo,
      folhaJson.remuneracaoFixa,
      folhaJson.vantagensPessoais,
      folhaJson.funcaoCargoComissao,
      folhaJson.gratificacaoNatalina,
      folhaJson.ferias,
      folhaJson.remuneracoesEventuais,
      folhaJson.abonoPermanencia,
      folhaJson.redutorConstitucional,
      folhaJson.contribuicaoPrevidenciaria,
      folhaJson.impostoRenda,
      folhaJson.remuneracaoAposDescontos,
      folhaJson.diarias,
      folhaJson.auxilios,
      folhaJson.vantagensIndenizatorias
    );
  }

  public constructor(
    private _id: number,
    private _nome: string,
    private _folhaPagamento: string,
    private _ano: number,
    private _mes: number,
    private _vinculo: string,
    private _cargo: string,
    private _remuneracaoFixa: number,
    private _vantagensPessoais: number,
    private _funcaoCargoComissao: number,
    private _gratificacaoNatalina: number,
    private _ferias: number,
    private _remuneracoesEventuais: number,
    private _abonoPermanencia: number,
    private _redutorConstitucional: number,
    private _contribuicaoPrevidenciaria: number,
    private _impostoRenda: number,
    private _remuneracaoAposDescontos: number,
    private _diarias: number,
    private _auxilios: number,
    private _vantagensIndenizatorias: number
  ) { }

  public get id(): number {
    return this._id;
  }

  public get folhaPagamento(): string {
    return this._folhaPagamento;
  }

  public get nome(): string {
    return this._nome;
  }

  public get ano(): number {
    return this._ano;
  }

  public get mes(): number {
    return this._mes;
  }

  public get vinculo(): string {
    return this._vinculo;
  }

  public get cargo(): string {
    return this._cargo;
  }

  public get remuneracaoFixa(): number {
    return this._remuneracaoFixa;
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

  public get ferias(): number {
    return this._ferias;
  }

  public get remuneracoesEventuais(): number {
    return this._remuneracoesEventuais;
  }

  public get abonoPermanencia(): number {
    return this._abonoPermanencia;
  }

  public get redutorConstitucional(): number {
    return this._redutorConstitucional;
  }

  public get contribuicaoPrevidenciaria(): number {
    return this._contribuicaoPrevidenciaria;
  }

  public get impostoRenda(): number {
    return this._impostoRenda;
  }

  public get remuneracaoAposDescontos(): number {
    return this._remuneracaoAposDescontos;
  }

  public get diarias(): number {
    return this._diarias;
  }

  public get auxilios(): number {
    return this._auxilios;
  }

  public get vantagensIndenizatorias(): number {
    return this._vantagensIndenizatorias;
  }
}
