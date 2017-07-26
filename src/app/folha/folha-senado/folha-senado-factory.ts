import { FolhaSenado } from '.';

export class FolhaSenadoFactory {

  public static createFolhaList(folhaListJson: any): FolhaSenado[] {
    return (<FolhaSenado[]>folhaListJson).map((folhaJson: FolhaSenado) => FolhaSenado.fromJson(folhaJson));
  }

  public static createFolha(folhaJson: FolhaSenado): FolhaSenado {
    return FolhaSenado.fromJson(folhaJson);
  }
}
