import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiCreateTimePeriods} from "@taiga-ui/kit";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Device} from "../../../interfaces";
import {DeviceService} from "../../../services/device.service";
import {ModalDeviceCardComponent} from "../modal-device-card/modal-device-card.component";
import {ModalSuccessBookingComponent} from "../modal-success-booking/modal-success-booking.component";


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

  constructor(@Optional() public dialogBooking: MatDialogRef<ModalBookingCardComponent>,
              @Optional() public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService) { }

  device$: Observable<Device>

  ngOnInit(): void {
    this.device$ = this.deviceService.getDevicesShortById(this.data)
  }

  openSuccessBookingDialog(): void {
    const dialogCard = this.dialog.open(ModalSuccessBookingComponent, {
      panelClass: 'custom-modalbox'
    });
  }

}
