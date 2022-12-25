import { Component, OnInit } from '@angular/core';
import {ModalBookingHistoryService} from "../../../services/modal-booking-history.service";

@Component({
  selector: 'app-modal-booking-history',
  templateUrl: './modal-booking-history.component.html',
  styleUrls: ['./modal-booking-history.component.scss']
})
export class ModalBookingHistoryComponent implements OnInit {

  constructor(public modalBookingHistoryService: ModalBookingHistoryService) { }

  ngOnInit(): void {
  }

}
