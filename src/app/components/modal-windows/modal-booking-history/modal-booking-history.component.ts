import {Component, OnInit, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {Observable} from "rxjs";
import {BookedDevice} from "../../../interfaces";
import {ProfileService} from "../../../services/profile.service";

@Component({
  selector: 'app-modal-booking-history',
  templateUrl: './modal-booking-history.component.html',
  styleUrls: ['./modal-booking-history.component.scss']
})
export class ModalBookingHistoryComponent implements OnInit {

  constructor(@Optional() public dialogBookingHistory: MatDialogRef<ModalBookingHistoryComponent>,
              private profileService: ProfileService) { }

  closeBookingHistoryDialog(): void {
    this.dialogBookingHistory.close();
  }

  bookingHistory$: Observable<BookedDevice[]>
  ngOnInit(): void {
    this.bookingHistory$ = this.profileService.getBookingHistory()
  }

}
