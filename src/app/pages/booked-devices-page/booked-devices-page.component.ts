import { Component, OnInit } from '@angular/core';
import {BookedDevice} from "../../interfaces";
import {Observable} from "rxjs";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-booked-devices-page',
  templateUrl: './booked-devices-page.component.html',
  styleUrls: ['./booked-devices-page.component.scss']
})
export class BookedDevicesPageComponent implements OnInit {
  searchKey: string = "";
  constructor(private deviceService: DeviceService) { }

  bookedDevices$: Observable<BookedDevice[]>
  ngOnInit(): void {
    this.bookedDevices$ = this.deviceService.getBookedDevices()

    this.deviceService.search.subscribe((value) => {
      this.searchKey = value;
    })
  }

}
