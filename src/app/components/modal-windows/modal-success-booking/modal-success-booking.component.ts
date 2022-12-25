import { Component, OnInit } from '@angular/core';
import {ModalSuccessBookingService} from "../../../services/modal-success-booking.service";

@Component({
  selector: 'app-modal-success-booking',
  templateUrl: './modal-success-booking.component.html',
  styleUrls: ['./modal-success-booking.component.scss']
})
export class ModalSuccessBookingComponent implements OnInit {

  constructor(public modalSuccessBookingService: ModalSuccessBookingService) { }

  ngOnInit(): void {
  }

}
