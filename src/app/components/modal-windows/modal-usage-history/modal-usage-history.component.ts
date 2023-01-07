import {Component, Inject, OnInit, Optional} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DeviceService} from "../../../services/device.service";

@Component({
  selector: 'app-modal-usage-history',
  templateUrl: './modal-usage-history.component.html',
  styleUrls: ['./modal-usage-history.component.scss']
})
export class ModalUsageHistoryComponent implements OnInit {

  constructor(@Optional() public dialogUsageHistory: MatDialogRef<ModalUsageHistoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: number,
              private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  closeUsageHistoryDialog(): void {
    this.dialogUsageHistory.close();
  }
}
