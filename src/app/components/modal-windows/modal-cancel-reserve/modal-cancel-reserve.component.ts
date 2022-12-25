import { Component, OnInit } from '@angular/core';
import {ModalCancelReserveService} from "../../../services/modal-cancel-reserve.service";

@Component({
  selector: 'app-modal-cancel-reserve',
  templateUrl: './modal-cancel-reserve.component.html',
  styleUrls: ['./modal-cancel-reserve.component.scss']
})
export class ModalCancelReserveComponent implements OnInit {

  constructor(public modalCancelReserveService: ModalCancelReserveService) { }

  ngOnInit(): void {
  }

}
