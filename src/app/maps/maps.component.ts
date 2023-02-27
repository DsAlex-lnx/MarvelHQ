import { Component, OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsService } from '../services/maps/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  // Juazeiro do Norte (CE) coords
  jdo_lat = -7.224033459009332
  jdo_lng = -39.31349285124824

  display: any;
  center: google.maps.LatLngLiteral = {lat: this.jdo_lat, lng: this.jdo_lng};
  zoom = 14;
  markerOptions: google.maps.MarkerOptions = {draggable: false}
  markerPosition: google.maps.LatLngLiteral | null = null;
  private hasMarker = false;

  constructor(private mapsService: MapsService) {}

  ngOnInit(): void {
    this.mapsService.mapsComponent = this;
  }

  moveMap(event:google.maps.MapMouseEvent) {
    if(event.latLng != null)
      this.center = (event.latLng.toJSON());
  }

  move(event:google.maps.MapMouseEvent) {
    if(event.latLng != null)
      this.display = (event.latLng.toJSON());
  }

  addMarker(event:google.maps.MapMouseEvent) {
    if(event.latLng != null){
        this.markerPosition = event.latLng.toJSON()
        this.hasMarker = true;
    }
  }

  gethasMarker():boolean {
    return this.hasMarker;
  }
}
