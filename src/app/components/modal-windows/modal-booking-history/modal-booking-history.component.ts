import {Component, OnInit, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-booking-history',
  templateUrl: './modal-booking-history.component.html',
  styleUrls: ['./modal-booking-history.component.scss']
})
export class ModalBookingHistoryComponent implements OnInit {

  constructor(@Optional() public dialogBookingHistory: MatDialogRef<ModalBookingHistoryComponent>) { }

  closeBookingHistoryDialog(): void {
    this.dialogBookingHistory.close();
  }

  ngOnInit(): void {
  }

}
