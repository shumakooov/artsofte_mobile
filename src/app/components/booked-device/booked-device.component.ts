import {Component, OnInit, Optional} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDeviceProblemComponent} from "../modal-windows/modal-device-problem/modal-device-problem.component";
import {ModalConfirmCancelReserveComponent} from "../modal-windows/modal-confirm-cancel-reserve/modal-confirm-cancel-reserve.component";
import {ModalConfirmReturnDeviceComponent} from "../modal-windows/modal-confirm-return-device/modal-confirm-return-device.component";

@Component({
  selector: 'app-booked-device',
  templateUrl: './booked-device.component.html',
  styleUrls: ['./booked-device.component.scss']
})
export class BookedDeviceComponent implements OnInit {

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
      panelClass: 'custom-modalbox'
    });
  }

  openConfirmReturnDeviceDialog(): void {
    this.dialog.open(ModalConfirmReturnDeviceComponent, {
      panelClass: 'custom-modalbox'
    });
  }

}
