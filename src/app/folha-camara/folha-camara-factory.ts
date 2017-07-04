import { FolhaCamara } from '.';

export class FolhaCamaraFactory {

  public static createFolhaList(folhaListJson: any): FolhaCamara[] {
    return (<FolhaCamara[]>folhaListJson).map((folhaJson: FolhaCamara) => FolhaCamara.fromJson(folhaJson));
  }

  public static createFolha(folhaJson: FolhaCamara): FolhaCamara {
    return FolhaCamara.fromJson(folhaJson);
  }
}
