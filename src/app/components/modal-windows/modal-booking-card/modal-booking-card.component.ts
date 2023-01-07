import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiCreateTimePeriods} from "@taiga-ui/kit";
import {ModalSuccessBookingService} from "../../../services/modal-success-booking.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Device} from "../../../interfaces";
import {DeviceService} from "../../../services/device.service";


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

  constructor(public modalSuccessBookingService: ModalSuccessBookingService,
              @Optional() public dialogBooking: MatDialogRef<ModalBookingCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService) { }

  device$: Observable<Device>

  ngOnInit(): void {
    this.device$ = this.deviceService.getDevicesShortById(this.data)
  }

}
