export class Song {
  _titulo!: string;
  _artista?: string;
  _year?: number;

  constructor(aTitulo: string) {
    this.titulo = aTitulo;
  }

  get titulo(): string {
    console.log("get titulo");
    return this._titulo;
  }

  set titulo(aTitulo: string) {
    const trimmed = aTitulo.trim();
    if (trimmed.length === 0) {
      throw new Error("El título de la canción no puede ser vacío.");
    }
    this._titulo = trimmed;
  }

  get artista(): string | undefined {
    return this._artista;
  }

  set artista(aArtista: string) {
    const trimmed = aArtista.trim();
    this._artista = trimmed;
  }

  get year(): number | undefined {
    return this._year;
  }

  set year(aYear: number) {
    if (aYear < 0) {
      throw new Error("El año de la canción no puede ser negativo.");
    }
    this._year = aYear;
  }

  toString(): string {
    var songString = "";
    if (this.artista === undefined || this.artista.trim() === "") {
      songString = `Canción: ${this.titulo} - año: ${this.year}`;
    } else {
      songString = `Canción: ${this.titulo} - artista: ${this.artista} - año: ${this.year}`;
    }
    return songString;
  }
}
