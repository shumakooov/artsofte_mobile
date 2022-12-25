import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalDeviceCardService} from "../../../services/modal-device-card.service";
import {ModalCharacteristicDeviceService} from "../../../services/modal-characteristic-device.service";
import {ModalUsageHistoryService} from "../../../services/modal-usage-history.service";
import {ModalBookingCardService} from "../../../services/modal-booking-card.service";

@Component({
  selector: 'app-modal-device-card',
  templateUrl: './modal-device-card.component.html',
  styleUrls: ['./modal-device-card.component.scss']
})
export class ModalDeviceCardComponent implements OnInit {

  value = [`Xiaomi`, `Android`, `6,67"`, `MIUI`, `MI Браузер`];
  readonly control = new FormControl([]);

  constructor(public modalDeviceCardService: ModalDeviceCardService,
              public modalCharacteristicDeviceService: ModalCharacteristicDeviceService,
              public modalUsageHistoryService: ModalUsageHistoryService,
              public modalBookingCardService: ModalBookingCardService) { }

  ngOnInit(): void {
  }

}
