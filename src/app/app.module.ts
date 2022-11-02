import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TUI_SANITIZER,
  TuiButtonModule,
} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './components/device/device.component';
import { ListDevicesPageComponent } from './pages/list-devices-page/list-devices-page.component';
import { BookedDevicesPageComponent } from './pages/booked-devices-page/booked-devices-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterComponent } from './components/filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ListDevicesPageComponent,
    BookedDevicesPageComponent,
    ProfilePageComponent,
    NavigationComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiButtonModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
