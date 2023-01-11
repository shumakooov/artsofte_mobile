import { Component, OnInit } from '@angular/core';
import {DeviceService} from "../../services/device.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  onClick(){
    this.deviceService.search.next('')
  }

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

}
