import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
} from "@taiga-ui/core";
import {TuiInputModule, TuiInputSliderModule, } from '@taiga-ui/kit';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceComponent } from './components/device/device.component';
import { ListDevicesPageComponent } from './pages/list-devices-page/list-devices-page.component';
import { BookedDevicesPageComponent } from './pages/booked-devices-page/booked-devices-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FilterComponent } from './components/filter/filter.component';
import { BookedDeviceComponent } from './components/booked-device/booked-device.component';
import { DropdownSystemComponent } from './components/dropdown-system/dropdown-system.component';
import { DropdownTypeComponent } from './components/dropdown-type/dropdown-type.component';
import { DropdownDepartmentComponent } from './components/dropdown-department/dropdown-department.component';



@NgModule({
  declarations: [
    AppComponent,
    DeviceComponent,
    ListDevicesPageComponent,
    BookedDevicesPageComponent,
    ProfilePageComponent,
    NavigationComponent,
    FilterComponent,
    BookedDeviceComponent,
    DropdownSystemComponent,
    DropdownTypeComponent,
    DropdownDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiButtonModule,
    ReactiveFormsModule,
    TuiInputModule,
    FormsModule,
    TuiInputSliderModule,
    TuiDataListModule,
    TuiActiveZoneModule,
    TuiDropdownModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
