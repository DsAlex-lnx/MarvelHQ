import { Component, Input} from '@angular/core';
import { IComic } from '../models/IComic';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HqModalComponent } from '../hq-modal/hq-modal.component';

@Component({
  selector: 'app-hq-card',
  templateUrl: './hq-card.component.html',
  styleUrls: ['./hq-card.component.css']
})
export class HqCardComponent{
  modalRef!: BsModalRef['content'];
  
  @Input()
  comic!: IComic;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.modalRef = this.modalService.show(HqModalComponent, {
      initialState: {
        comic: this.comic,
        modalConfig: {
          backdrop: true,
          keyboard: true,
          animated: true,
          class: 'modal-dialog-centered'
        }
      }
    });
  } 
  
}
