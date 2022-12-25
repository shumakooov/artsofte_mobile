import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {ModalDeviceCardService} from "../../services/modal-device-card.service";
import {ModalCharacteristicDeviceService} from "../../services/modal-characteristic-device.service";
import {ModalUsageHistoryService} from "../../services/modal-usage-history.service";
import {ModalBookingCardService} from "../../services/modal-booking-card.service";
import {ModalSuccessBookingService} from "../../services/modal-success-booking.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceComponent implements OnInit {

  @Input() imgUrl: string;
  @Input() deviceName: string;
  @Input() os: string;
  @Input() diagonal: number;
  @Input() department: string;

  constructor(public modalDeviceCardService: ModalDeviceCardService,
              public modalCharacteristicDeviceService: ModalCharacteristicDeviceService,
              public modalUsageHistoryService: ModalUsageHistoryService,
              public modalBookingCardService: ModalBookingCardService,
              public modalSuccessBookingService: ModalSuccessBookingService) { }

  ngOnInit(): void {
  }

}
