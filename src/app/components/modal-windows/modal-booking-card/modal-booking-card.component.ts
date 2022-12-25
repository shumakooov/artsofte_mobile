import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDeviceCardService} from "../../../services/modal-device-card.service";
import {ModalBookingCardService} from "../../../services/modal-booking-card.service";
import {tuiCreateTimePeriods} from "@taiga-ui/kit";
import {ModalSuccessBookingService} from "../../../services/modal-success-booking.service";


@Component({
  selector: 'app-modal-booking-card',
  templateUrl: './modal-booking-card.component.html',
  styleUrls: ['./modal-booking-card.component.scss']
})
export class ModalBookingCardComponent implements OnInit {

  value = [`Xiaomi`, `Android`, `6,67"`, `MIUI`, `MI Браузер`];
  readonly control = new FormControl([]);

  items1 = tuiCreateTimePeriods();
  readonly timeForm1 = new FormGroup({
    testValue: new FormControl(null),
  });
  readonly timeForm2 = new FormGroup({
    testValue: new FormControl(null),
  });

  constructor(public modalDeviceCardService: ModalDeviceCardService,
              public modalBookingCardService: ModalBookingCardService,
              public modalSuccessBookingService: ModalSuccessBookingService) { }

  ngOnInit(): void {
  }

}
