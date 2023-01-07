import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-modal-characteristic-device',
  templateUrl: './modal-characteristic-device.component.html',
  styleUrls: ['./modal-characteristic-device.component.scss']
})
export class ModalCharacteristicDeviceComponent implements OnInit {

  constructor(@Optional() public dialogCharacteristic: MatDialogRef<ModalCharacteristicDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  closeCharacteristicDialog(): void {
    this.dialogCharacteristic.close();
  }

}
