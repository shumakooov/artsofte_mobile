import { Component, OnInit } from '@angular/core';
import {ModalCancelReserveService} from "../../../services/modal-cancel-reserve.service";
import {ModalConfirmCancelReserveService} from "../../../services/modal-confirm-cancel-reserve.service";

@Component({
  selector: 'app-modal-confirm-cancel-reserve',
  templateUrl: './modal-confirm-cancel-reserve.component.html',
  styleUrls: ['./modal-confirm-cancel-reserve.component.scss']
})
export class ModalConfirmCancelReserveComponent implements OnInit {

  constructor(public modalCancelReserveService: ModalCancelReserveService,
              public modalConfirmCancelReserveService: ModalConfirmCancelReserveService) { }

  ngOnInit(): void {
  }

}
