import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalReturnDeviceComponent} from "../modal-return-device/modal-return-device.component";
import {DeviceService} from "../../../services/device.service";
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-modal-confirm-return-device',
  templateUrl: './modal-confirm-return-device.component.html',
  styleUrls: ['./modal-confirm-return-device.component.scss']
})
export class ModalConfirmReturnDeviceComponent implements OnInit {

  constructor(@Optional() public dialogConfirmReturn: MatDialogRef<ModalConfirmReturnDeviceComponent>,
              @Optional() public dialogReturn: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService,
              private filterService: FilterService) { }

  depts: [{ id: number; name: string }]

  ngOnInit(): void {
    this.filterService.getFilters().subscribe(filters => {
      this.depts = filters.departments
    })
  }

  closeConfirmReturn() {
    this.dialogConfirmReturn.close()
  }

  openReturnDeviceDialog(): void {
    this.dialogReturn.open(ModalReturnDeviceComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  handleDept(id: number) {
    this.deviceService.deptId.next(id);
  }

  value: number ;
  doReturnDevice() {
    const returnDevice = {
      recordId: this.data,
      departmentId: this.deviceService.deptId.value
    }

    this.deviceService.returnDevice(returnDevice).subscribe()
  }
}
