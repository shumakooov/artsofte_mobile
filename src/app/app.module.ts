import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TUI_SANITIZER,
  TuiButtonModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiTextfieldControllerModule,
  TuiErrorModule,
  TuiDialogModule,
  TuiSvgModule,
  TuiHostedDropdownModule, TuiScrollbarModule, TuiLoaderModule,
} from "@taiga-ui/core";
import {
  TuiInputModule,
  TuiInputDateModule,
  TuiUnfinishedValidatorModule,
  TuiFieldErrorPipeModule,
  TuiTextAreaModule,
  TuiInputFilesModule,
  TuiInputTagModule,
  TuiInputTimeModule,
  TuiRangeModule,
  TuiIslandModule,
  TuiMultiSelectModule,
  TuiInputPasswordModule,
  TuiSelectModule,
  TuiDataListWrapperModule,
  TuiCheckboxLabeledModule
} from '@taiga-ui/kit';
import {TuiActiveZoneModule, TuiLetModule} from '@taiga-ui/cdk';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DeviceComponent} from './components/device/device.component';
import {ListDevicesPageComponent} from './pages/list-devices-page/list-devices-page.component';
import {BookedDevicesPageComponent} from './pages/booked-devices-page/booked-devices-page.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FilterComponent} from './components/filter/filter.component';
import {BookedDeviceComponent} from './components/booked-device/booked-device.component';
import {DropdownSystemComponent} from './components/dropdowns/dropdown-system/dropdown-system.component';
import {DropdownTypeComponent} from './components/dropdowns/dropdown-type/dropdown-type.component';
import {DropdownDepartmentComponent} from './components/dropdowns/dropdown-department/dropdown-department.component';
import {DropdownSortComponent} from "./components/dropdowns/dropdown-sort/dropdown-sort.component";
import {
  ModalCancelReserveComponent
} from './components/modal-windows/modal-cancel-reserve/modal-cancel-reserve.component';
import {ModalReturnDeviceComponent} from './components/modal-windows/modal-return-device/modal-return-device.component';
import {
  ModalDeviceProblemComponent
} from './components/modal-windows/modal-device-problem/modal-device-problem.component';
import {DropdownReasonComponent} from './components/dropdowns/dropdown-reason/dropdown-reason.component';
import {InputFilesComponent} from './components/input-files/input-files.component';
import {
  ModalConfirmReturnDeviceComponent
} from './components/modal-windows/modal-confirm-return-device/modal-confirm-return-device.component';
import {ModalDeviceCardComponent} from './components/modal-windows/modal-device-card/modal-device-card.component';
import {
  ModalCharacteristicDeviceComponent
} from './components/modal-windows/modal-characteristic-device/modal-characteristic-device.component';
import {ModalUsageHistoryComponent} from './components/modal-windows/modal-usage-history/modal-usage-history.component';
import {
  ModalBookingHistoryComponent
} from "./components/modal-windows/modal-booking-history/modal-booking-history.component";
import {
  ModalConfirmCancelReserveComponent
} from "./components/modal-windows/modal-confirm-cancel-reserve/modal-confirm-cancel-reserve.component";
import {ModalBookingCardComponent} from "./components/modal-windows/modal-booking-card/modal-booking-card.component";
import {
  ModalSuccessBookingComponent
} from "./components/modal-windows/modal-success-booking/modal-success-booking.component";
import {DropdownTagComponent} from "./components/dropdowns/dropdown-tag/dropdown-tag.component";
import {CalendarComponent} from './components/calendar/calendar.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HttpClientModule} from "@angular/common/http";
import {EditProfilePageComponent} from './pages/edit-profile-page/edit-profile-page.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {HomeLayoutComponent} from "./layouts/home-layout/home-layout.component";
import {LoginLayoutComponent} from "./layouts/login-layout/login-layout.component";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {FilterPipe} from "./pipes/filter.pipe";
import {FilterBookedPipe} from "./pipes/filterBooked.pipe";


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
    DropdownDepartmentComponent,
    DropdownSortComponent,
    ModalCancelReserveComponent,
    ModalReturnDeviceComponent,
    ModalDeviceProblemComponent,
    DropdownReasonComponent,
    InputFilesComponent,
    ModalConfirmReturnDeviceComponent,
    ModalDeviceCardComponent,
    ModalCharacteristicDeviceComponent,
    ModalUsageHistoryComponent,
    ModalBookingHistoryComponent,
    ModalConfirmCancelReserveComponent,
    ModalBookingCardComponent,
    ModalSuccessBookingComponent,
    DropdownTagComponent,
    CalendarComponent,
    LoginPageComponent,
    EditProfilePageComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    FilterPipe,
    FilterBookedPipe
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
    TuiDataListModule,
    TuiActiveZoneModule,
    TuiDropdownModule,
    TuiInputDateModule,
    TuiUnfinishedValidatorModule,
    TuiFieldErrorPipeModule,
    TuiTextfieldControllerModule,
    TuiErrorModule,
    TuiDialogModule,
    TuiSvgModule,
    TuiTextAreaModule,
    TuiInputFilesModule,
    TuiInputTagModule,
    TuiInputTimeModule,
    TuiRangeModule,
    TuiIslandModule,
    TuiHostedDropdownModule,
    TuiMultiSelectModule,
    TuiInputPasswordModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    TuiScrollbarModule,
    TuiLoaderModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiLetModule,
    TuiCheckboxLabeledModule
  ],
  providers: [
    {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {}},
    ListDevicesPageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
