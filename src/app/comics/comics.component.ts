import { Component } from '@angular/core';
import { MarvelService } from '../services/marvel/marvel.service';
import { HqCardComponent } from '../hq-card/hq-card.component';
import { IComic } from '../models/IComic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent {
  comics!: IComic[];
  totalComics: any;
  page:number = 1;
  itemsPerPage:number = 12;

  constructor(public marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.retrieveData()
  }

  retrieveData() {
    this.marvelService.catchComics().then((data:any) => {
      this.comics = data;
      this.totalComics = data.lenght;
    })
  }
}
