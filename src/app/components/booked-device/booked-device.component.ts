import { Component, OnInit } from '@angular/core';
import {ModalCancelReserveService} from "../../services/modal-cancel-reserve.service";
import {ModalReturnDeviceService} from "../../services/modal-return-device.service";
import {ModalDeviceProblemService} from "../../services/modal-device-problem.service";
import {ModalConfirmReturnDeviceService} from "../../services/modal-confirm-return-device.service";
import {ModalConfirmCancelReserveService} from "../../services/modal-confirm-cancel-reserve.service";

@Component({
  selector: 'app-booked-device',
  templateUrl: './booked-device.component.html',
  styleUrls: ['./booked-device.component.scss']
})
export class BookedDeviceComponent implements OnInit {

  constructor(public modalCancelReserveService: ModalCancelReserveService,
              public modalReturnDeviceService: ModalReturnDeviceService,
              public modalDeviceProblemService: ModalDeviceProblemService,
              public modalConfirmReturnDeviceService: ModalConfirmReturnDeviceService,
              public modalConfirmCancelReserveService: ModalConfirmCancelReserveService) { }

  ngOnInit(): void {
  }

}
