import {Injectable} from "@angular/core";
import {Device, User} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(user: User) {
    return this.http.post<any>(`${environment.API_URL}/user/login`, user, { withCredentials: true })
  }

  logout() {
    return this.http.get<any>(`${environment.API_URL}/user/logout`, { withCredentials: true })
  }

  isAuthenticated(): Observable<boolean>{
    return this.http.get<boolean>(`${environment.API_URL}/user/authorize`, { withCredentials: true });
  }
}
