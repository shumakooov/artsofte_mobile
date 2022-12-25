import { Component, OnInit } from '@angular/core';
import {ModalReturnDeviceService} from "../../../services/modal-return-device.service";

@Component({
  selector: 'app-modal-return-device',
  templateUrl: './modal-return-device.component.html',
  styleUrls: ['./modal-return-device.component.scss']
})
export class ModalReturnDeviceComponent implements OnInit {

  constructor(public modalReturnDeviceService: ModalReturnDeviceService) { }

  ngOnInit(): void {
  }

}
