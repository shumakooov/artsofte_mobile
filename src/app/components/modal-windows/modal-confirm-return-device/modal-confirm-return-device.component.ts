import { Component, OnInit } from '@angular/core';
import {ModalConfirmReturnDeviceService} from "../../../services/modal-confirm-return-device.service";
import {ModalReturnDeviceService} from "../../../services/modal-return-device.service";

@Component({
  selector: 'app-modal-confirm-return-device',
  templateUrl: './modal-confirm-return-device.component.html',
  styleUrls: ['./modal-confirm-return-device.component.scss']
})
export class ModalConfirmReturnDeviceComponent implements OnInit {

  constructor(public modalConfirmReturnDeviceService: ModalConfirmReturnDeviceService,
              public modalReturnDeviceService: ModalReturnDeviceService) { }

  ngOnInit(): void {
  }

}
