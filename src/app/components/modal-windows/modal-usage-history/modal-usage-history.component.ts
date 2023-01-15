import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceService} from "../../../services/device.service";
import {Observable} from "rxjs";
import {RecordsHistory} from "../../../interfaces";

@Component({
  selector: 'app-modal-usage-history',
  templateUrl: './modal-usage-history.component.html',
  styleUrls: ['./modal-usage-history.component.scss']
})
export class ModalUsageHistoryComponent implements OnInit {

  constructor(@Optional() public dialogUsageHistory: MatDialogRef<ModalUsageHistoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService) { }

  usageHistory$: Observable<RecordsHistory[]>
  ngOnInit(): void {
    this.usageHistory$ = this.deviceService.getUsageHistoryById(this.data)
  }

  closeUsageHistoryDialog(): void {
    this.dialogUsageHistory.close();
  }
}
