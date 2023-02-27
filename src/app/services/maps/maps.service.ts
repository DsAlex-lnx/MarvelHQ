import { Injectable } from '@angular/core';
import { MapsComponent } from '../../maps/maps.component';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  mapsComponent!: MapsComponent;
}