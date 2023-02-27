import { Component, NgModule} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IComic } from '../models/IComic';
import { IModal } from '../models/IModal';
import { MapsComponent } from '../maps/maps.component';
import { MapsService } from '../services/maps/maps.service';

@Component({
  selector: 'app-hq-modal',
  templateUrl: './hq-modal.component.html',
  styleUrls: ['./hq-modal.component.css']
})
export class HqModalComponent{
  modalRef!: BsModalRef;
  comic!: IComic;
  modalConfig: IModal = {
    class: 'modal-dialog-centered',
    animated: true,
    keyboard: true,
    backdrop: true,
  };
  

  constructor(private bsModalRef: BsModalRef, private mapsComponent: MapsService){
    this.modalRef = bsModalRef
  }
  
  hide() {
    this.modalRef.hide();
  }

  sendComic() {
    const message = "Are you sure you want to send this comic to the specified location?";
    if (this.mapsComponent.mapsComponent.gethasMarker()){
      if(confirm(message) == true){
        alert("Congratulations, a comic will be sent to the indicated location.")
      } else {
        alert("Oh no, you canceled the shipment!")
      }
    } else {
      alert("Please select a location on the map.");
    }
  }

}
