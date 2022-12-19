

export class Movie  {
  public id: number;
  public title: string;
  public year: number;
  public genre: string[];
  public director: string;
  public writer: string;
  public actors: string[];
  public plot: string;
  public language: string;
  public country: string;
  public awards: string;
  public poster: string;
  public trailer: string;

  constructor(json: any) {
    this.id =       json.Id;
    this.title =    json.Title;
    this.year =     json.Year;
    this.genre =    json.Genre;
    this.director = json.Director;
    this.writer =   json.Writer;
    this.actors =   json.Actors;
    this.plot =     json.Pilot;
    this.language = json.Language;
    this.country =  json.Country;
    this.awards =   json.Awards;
    this.poster =   json.Poster
    this.trailer =  json.Trailer;
  }

}
