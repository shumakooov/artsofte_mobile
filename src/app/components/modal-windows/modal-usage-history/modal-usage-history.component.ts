import { Component, OnInit } from '@angular/core';
import {ModalUsageHistoryService} from "../../../services/modal-usage-history.service";
import {ModalDeviceCardService} from "../../../services/modal-device-card.service";

@Component({
  selector: 'app-modal-usage-history',
  templateUrl: './modal-usage-history.component.html',
  styleUrls: ['./modal-usage-history.component.scss']
})
export class ModalUsageHistoryComponent implements OnInit {

  constructor(public modalUsageHistoryService: ModalUsageHistoryService,
              public modalDeviceCardService: ModalDeviceCardService) { }

  ngOnInit(): void {
  }

}
