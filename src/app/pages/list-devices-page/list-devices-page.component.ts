import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TuiDay, TuiDayRange, TuiMonth} from '@taiga-ui/cdk';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
  selector: 'app-list-devices-page',
  templateUrl: './list-devices-page.component.html',
  styleUrls: ['./list-devices-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListDevicesPageComponent implements OnInit {

  isPhonePortrait = false;

  constructor(private responsive: BreakpointObserver) {
  }


  ngOnInit(): void {

    this.responsive.observe(Breakpoints.HandsetPortrait)
      .subscribe(result => {

        this.isPhonePortrait = false;

        if (result.matches) {
          this.isPhonePortrait = true;
        }

      });

  }

}
