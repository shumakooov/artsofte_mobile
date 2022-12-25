import {Injectable} from "@angular/core";
import {Device, User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private loggedUser: User | undefined;

  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<any>(`${environment.API_URL}/user/login`, user, { withCredentials: true }).pipe(tap(data => this.loggedUser = data))
  }

  logout() {
    return this.http.get<any>(`${environment.API_URL}/user/logout`)
    // .pipe(tap(()=> this.loggedUser = undefined))
  }

  isAuthenticated(){
    return !!this.http.get<Device[]>(`${environment.API_URL}/device/info/short`, { withCredentials: true });
  }
}
