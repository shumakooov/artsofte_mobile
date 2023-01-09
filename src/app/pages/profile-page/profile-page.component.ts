import {Component, OnInit, Optional} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ProfileService} from "../../services/profile.service";
import {Observable} from "rxjs";
import {Profile} from "../../interfaces";
import {
  ModalDeviceProblemComponent
} from "../../components/modal-windows/modal-device-problem/modal-device-problem.component";
import {MatDialog} from "@angular/material/dialog";
import {
  ModalBookingHistoryComponent
} from "../../components/modal-windows/modal-booking-history/modal-booking-history.component";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private router: Router,
              private auth: AuthService,
              private profileService: ProfileService,
              @Optional() public dialog: MatDialog,) {
  }

  profileInfo$: Observable<Profile>

  ngOnInit(): void {
    this.profileInfo$ = this.profileService.getProfileInfo()
  }

  openProblemDialog(): void {
    this.dialog.open(ModalDeviceProblemComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  openBookingHistoryDialog(): void {
    this.dialog.open(ModalBookingHistoryComponent, {
      panelClass: 'custom-modalbox'
    });
  }

  logout() {
    this.auth.logout().subscribe(
      () => this.router.navigate(['/login']),
      error => {
        console.warn(error)
      }
    )
  }

}
