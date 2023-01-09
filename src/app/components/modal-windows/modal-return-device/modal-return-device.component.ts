import {Component, OnInit, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-return-device',
  templateUrl: './modal-return-device.component.html',
  styleUrls: ['./modal-return-device.component.scss']
})
export class ModalReturnDeviceComponent implements OnInit {

  constructor(@Optional() public dialogReturn: MatDialogRef<ModalReturnDeviceComponent>) { }

  ngOnInit(): void {
  }

  closeReturn() {
    this.dialogReturn.close()
  }

}
