import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Device} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http: HttpClient) {
  }

  getDevicesShort(): Observable<Device[]>{
    return this.http.get<Device[]>(`${environment.API_URL}/device/info/short`, { withCredentials: true })
  }
}
