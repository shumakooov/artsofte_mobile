import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from "rxjs";
import {Device, Tag} from "../../../interfaces";
import {DeviceService} from "../../../services/device.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalBookingCardComponent} from "../modal-booking-card/modal-booking-card.component";
import {ModalCharacteristicDeviceComponent} from "../modal-characteristic-device/modal-characteristic-device.component";
import {ModalUsageHistoryComponent} from "../modal-usage-history/modal-usage-history.component";
import {environment} from "../../../../environments/environment";
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-modal-device-card',
  templateUrl: './modal-device-card.component.html',
  styleUrls: ['./modal-device-card.component.scss']
})
export class ModalDeviceCardComponent implements OnInit {
  API_URL = environment.API_URL
  @Input() id: number;

  tags:string[] = [`Xiaomi`, `Android`, `6,67"`, `MIUI`, `MI Браузер`];
  readonly control = new FormControl([]);

  constructor(private deviceService: DeviceService,
              @Optional() public dialogCard: MatDialogRef<ModalDeviceCardComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              @Optional() public dialog: MatDialog,
              private filterService: FilterService) {
  }

 closeCardDialog(): void {
    this.dialogCard.close();
  }

  device$: Observable<Device>

  ngOnInit(): void {
    this.device$ = this.deviceService.getDevicesShortById(this.data)
    // this.filterService.getTagsByDeviceId(this.data).subscribe(value => {
    //   this.tags = value.map(value1 => {return value1.name})
    // })
  }

  openBookingDialog(): void {
    this.dialog.open(ModalBookingCardComponent, {
      data: this.data,
      panelClass: 'custom-modalbox'
    });
  }

  openCharacteristicDialog(): void {
    const dialogCharacteristic = this.dialog.open(ModalCharacteristicDeviceComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  openUsageHistoryDialog(): void {
    const dialogUsageHistory = this.dialog.open(ModalUsageHistoryComponent, {
      panelClass: 'custom-modalbox',
      data: this.data,
    });
  }
}
