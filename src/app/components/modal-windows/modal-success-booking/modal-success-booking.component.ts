import {Component, OnInit, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-success-booking',
  templateUrl: './modal-success-booking.component.html',
  styleUrls: ['./modal-success-booking.component.scss']
})
export class ModalSuccessBookingComponent implements OnInit {

  constructor(@Optional() public dialogSuccessBooking: MatDialogRef<ModalSuccessBookingComponent>) { }

  ngOnInit(): void {
  }

  closeSuccessBookingDialog(): void {
    this.dialogSuccessBooking.close();
  }

  reloadLocation(){
    location.reload()
  }
}
