import { Component, OnInit } from '@angular/core';
import {ModalBookingHistoryService} from "../../services/modal-booking-history.service";
import {ModalDeviceProblemService} from "../../services/modal-device-problem.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ProfileService} from "../../services/profile.service";
import {Observable} from "rxjs";
import {Profile} from "../../interfaces";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(public modalBookingHistoryService: ModalBookingHistoryService,
              public modalDeviceProblemService: ModalDeviceProblemService,
              private router: Router,
              private auth: AuthService,
              private profileService: ProfileService) { }

  profileInfo$: Observable<Profile>

  ngOnInit(): void {
    this.profileInfo$ = this.profileService.getProfileInfo()
  }

  logout() {
    this.auth.logout().subscribe(
      () => this.router.navigate(['/login']),
      error => {console.warn(error)}
    )
  }

}
