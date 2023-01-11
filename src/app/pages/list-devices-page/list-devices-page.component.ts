import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from "rxjs";
import {Device} from "../../interfaces";
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-list-devices-page',
  templateUrl: './list-devices-page.component.html',
  styleUrls: ['./list-devices-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDevicesPageComponent {
  searchKey: string = "";
  devices$: Observable<Device[]>

  constructor(private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.devices$ = this.deviceService.getDevicesShort()

    this.deviceService.search.subscribe((value) => {
      this.searchKey = value;
    })
  }

}
