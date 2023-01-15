import {Component, Input, OnInit, Optional} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDeviceProblemComponent} from "../modal-windows/modal-device-problem/modal-device-problem.component";
import {ModalConfirmCancelReserveComponent} from "../modal-windows/modal-confirm-cancel-reserve/modal-confirm-cancel-reserve.component";
import {ModalConfirmReturnDeviceComponent} from "../modal-windows/modal-confirm-return-device/modal-confirm-return-device.component";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-booked-device',
  templateUrl: './booked-device.component.html',
  styleUrls: ['./booked-device.component.scss']
})
export class BookedDeviceComponent implements OnInit {
  API_URL = environment.API_URL;
  @Input() imgUrl: string;
  @Input() deviceName: string;
  @Input() timeFrom: string;
  @Input() timeTo: string;
  @Input() date: string;
  @Input() idRecord: number;

  constructor(@Optional() public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  openProblemDialog(): void {
    this.dialog.open(ModalDeviceProblemComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  openConfirmCancelReserveDialog(): void {
    this.dialog.open(ModalConfirmCancelReserveComponent, {
      data: this.idRecord,
      panelClass: 'custom-modalbox'
    });
  }

  openConfirmReturnDeviceDialog(): void {
    this.dialog.open(ModalConfirmReturnDeviceComponent, {
      panelClass: 'custom-modalbox',
      data: this.idRecord
    });
  }

}
