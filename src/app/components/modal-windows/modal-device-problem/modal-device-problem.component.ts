import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalDeviceProblemService} from "../../../services/modal-device-problem.service";

@Component({
  selector: 'app-modal-device-problem',
  templateUrl: './modal-device-problem.component.html',
  styleUrls: ['./modal-device-problem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDeviceProblemComponent implements OnInit {

  testForm = new FormGroup({
    testValue2: new FormControl(`This one can be expanded`, Validators.required),
  });

  constructor(public modalDeviceProblemService: ModalDeviceProblemService) { }

  ngOnInit(): void {
  }

}
