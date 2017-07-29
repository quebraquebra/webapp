import { FolhaCamara } from '.';

export class FolhaCamaraFactory {

  public static createFolhaList(folhaListJson: any): Array<FolhaCamara> {
    return (<Array<FolhaCamara>>folhaListJson).map((folhaJson: FolhaCamara) => FolhaCamara.fromJson(folhaJson));
  }

  public static createFolha(folhaJson: FolhaCamara): FolhaCamara {
    return FolhaCamara.fromJson(folhaJson);
  }
}
