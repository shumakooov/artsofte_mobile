import {Component, OnInit, Optional} from '@angular/core';
import { MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalReturnDeviceComponent} from "../modal-return-device/modal-return-device.component";

@Component({
  selector: 'app-modal-confirm-return-device',
  templateUrl: './modal-confirm-return-device.component.html',
  styleUrls: ['./modal-confirm-return-device.component.scss']
})
export class ModalConfirmReturnDeviceComponent implements OnInit {

  constructor(@Optional() public dialogConfirmReturn: MatDialogRef<ModalConfirmReturnDeviceComponent>,
              @Optional() public dialogReturn: MatDialog) { }

  ngOnInit(): void {
  }

  closeConfirmReturn() {
    this.dialogConfirmReturn.close()
  }

  openReturnDeviceDialog(): void {
    this.dialogReturn.open(ModalReturnDeviceComponent, {
      panelClass: 'custom-modalbox'
    });
  }
}
