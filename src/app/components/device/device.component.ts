import {Component, OnInit, ChangeDetectionStrategy, Input, Optional} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDeviceCardComponent} from "../modal-windows/modal-device-card/modal-device-card.component";
import {environment} from "../../../environments/environment";
import {ModalBookingCardComponent} from "../modal-windows/modal-booking-card/modal-booking-card.component";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeviceComponent implements OnInit {
  API_URL = environment.API_URL;
  @Input() id: number;
  @Input() imgUrl: string;
  @Input() deviceName: string;
  @Input() os: string;
  @Input() diagonal: number;
  @Input() department: string;

  constructor(@Optional() public dialog: MatDialog) { }

  openCardDialog(): void {
    const dialogCard = this.dialog.open(ModalDeviceCardComponent, {
      data: this.id,
      panelClass: 'custom-modalbox'
    });
  }

  openBookingDialog(): void {
    this.dialog.open(ModalBookingCardComponent, {
      data: this.id,
      panelClass: 'custom-modalbox'
    });
  }

  ngOnInit(): void {

  }

}
