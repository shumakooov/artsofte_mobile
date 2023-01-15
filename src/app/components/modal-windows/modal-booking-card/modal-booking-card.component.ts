import {Component, Inject, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {Device} from "../../../interfaces";
import {DeviceService} from "../../../services/device.service";
import {ModalSuccessBookingComponent} from "../modal-success-booking/modal-success-booking.component";
import {TuiAlertService} from "@taiga-ui/core";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-modal-booking-card',
  templateUrl: './modal-booking-card.component.html',
  styleUrls: ['./modal-booking-card.component.scss']
})
export class ModalBookingCardComponent implements OnInit {
  API_URL = environment.API_URL
  calendarValue = new FormControl(new Date());
  times: string[] = [
    '00:00', '00:30', '01:00',
    '01:30', '02:00', '02:30',
    '03:00', '03:30', '04:00',
    '04:30', '05:00', '05:30',
    '06:00', '06:30', '07:00',
    '07:30', '08:00', '08:30',
    '09:00', '09:30', '10:00',
    '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00',
    '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00',
    '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30',
    '21:00', '21:30', '22:00',
    '22:30', '23:00', '23:30',
  ];

  value = [`Xiaomi`, `Android`, `6,67"`, `MIUI`, `MI Браузер`];

  constructor(@Optional() public dialogBooking: MatDialogRef<ModalBookingCardComponent>,
              @Optional() public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService,
              @Inject(TuiAlertService)
              private readonly alertService: TuiAlertService) { }

  device$: Observable<Device>
  timeStartForm: FormGroup
  timeFinishForm: FormGroup

  ngOnInit(): void {
    this.device$ = this.deviceService.getDevicesShortById(this.data)

    this.timeStartForm = new FormGroup({
      timeStart: new FormControl(null, [Validators.required])
    })
    this.timeFinishForm = new FormGroup({
      timeFinish: new FormControl(null, [Validators.required])
    })
  }

  openSuccessBookingDialog(): void {
    const dialogCard = this.dialog.open(ModalSuccessBookingComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  recordDevice(){
      let date = this.calendarValue.value?.toISOString().split('T')[0]

    const record = {
      deviceid: this.data,
      date: date + 'T' + this.timeStartForm.value.timeStart + ':00',
      timefrom: date + 'T' + this.timeStartForm.value.timeStart + ':00',
      timeto: date + 'T' + this.timeFinishForm.value.timeFinish + ':00'
    }
    this.deviceService.doRecordDevice(record).subscribe(()=>{
      location.reload()
        },
      error => {
        this.alertService.open(error.error.message).subscribe();
      }
    )
  }

}
