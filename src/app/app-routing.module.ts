import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookedDevicesPageComponent} from "./pages/booked-devices-page/booked-devices-page.component";
import {ListDevicesPageComponent} from "./pages/list-devices-page/list-devices-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {EditProfilePageComponent} from "./pages/edit-profile-page/edit-profile-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch:'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'devices', component: ListDevicesPageComponent},
  {path: 'booked', component: BookedDevicesPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'profile/edit', component: EditProfilePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
