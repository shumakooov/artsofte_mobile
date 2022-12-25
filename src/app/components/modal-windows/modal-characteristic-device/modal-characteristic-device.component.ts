import { Component, OnInit } from '@angular/core';
import {ModalCharacteristicDeviceService} from "../../../services/modal-characteristic-device.service";
import {ModalDeviceCardService} from "../../../services/modal-device-card.service";

@Component({
  selector: 'app-modal-characteristic-device',
  templateUrl: './modal-characteristic-device.component.html',
  styleUrls: ['./modal-characteristic-device.component.scss']
})
export class ModalCharacteristicDeviceComponent implements OnInit {

  constructor(public modalCharacteristicDeviceService: ModalCharacteristicDeviceService,
              public modalDeviceCardService: ModalDeviceCardService) { }

  ngOnInit(): void {
  }

}
