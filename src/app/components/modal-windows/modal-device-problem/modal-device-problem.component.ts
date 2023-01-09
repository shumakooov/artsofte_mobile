import {ChangeDetectionStrategy, Component, OnInit, Optional} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from "@angular/material/dialog";

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

  constructor(@Optional() public dialogProblem: MatDialogRef<ModalDeviceProblemComponent>,) { }

  ngOnInit(): void {
  }
  closeProblemDialog(): void {
    this.dialogProblem.close();
  }
}
