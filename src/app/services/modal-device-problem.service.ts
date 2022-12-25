import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalDeviceProblemService {
  isVisible$ = new BehaviorSubject<boolean>(false)
  open (){
    this.isVisible$.next(true)
  }

  close () {
    this.isVisible$.next(false)
  }
}
