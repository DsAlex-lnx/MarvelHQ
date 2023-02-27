import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH, HASH_KEY, PUBLIC_KEY, TIMESTAMPS } from 'src/environments/environment.development';
import { IComic } from '../../models/IComic';

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  public readonly API = `${API_PATH}${TIMESTAMPS}&apikey=${PUBLIC_KEY}&hash=${HASH_KEY}`;
  comics: IComic[] = [];
  phrase: string = "Whatever happens tomorrow you must promise me one thing. That you will stay who you are. Not a perfect soldier, but a good man.";

  constructor(private httpClient: HttpClient) { 
    this.catchComics().then(comics => {
      this.comics.push(...comics)
    })
  }
  
  catchComics(): Promise<IComic[]> {
    return this.httpClient.get<any>(this.API)
      .toPromise()
      .then(request => {
        const comics = request.data.results.map((comic: IComic) => ({
          id: comic.id,
          title: comic.title,
          thumbnail: comic.thumbnail || { path: 'default', extension: 'jpg' },
          description: comic.description || this.phrase
        }));
      
      return comics;
    }).catch (error => {
      console.error(error);
      return [];
    });
  }
}
