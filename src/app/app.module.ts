import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { HqCardComponent } from './hq-card/hq-card.component';

import { HttpClientModule} from '@angular/common/http';
import { MarvelService } from './services/marvel/marvel.service';

import { ModalModule } from 'ngx-bootstrap/modal';
import { HqModalComponent } from './hq-modal/hq-modal.component';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from './maps/maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsService } from './services/maps/maps.service';


@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    HqCardComponent,
    HqModalComponent,
    HeaderComponent,
    MapsComponent,
  ],
  imports: [
    NgbModule,
    NgxPaginationModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    GoogleMapsModule,
  ],
  providers: [MarvelService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
