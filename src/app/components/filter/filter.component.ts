import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay} from "@taiga-ui/cdk";
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {

  //Range, выбор диагонали
  rangeValue = [20, 30];
  readonly minRange = 0;
  readonly maxRange = 50;
  readonly stepRange = 0.5;

  //Календарь
  readonly testForm = new FormGroup({
    testValue: new FormControl(new TuiDay(2017, 0, 15)),
  });

  //Dialog
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
  ) {}

  onClick(
    content: PolymorpheusContent<TuiDialogContext>,
    size: TuiDialogSize,
  ): void {
    this.dialogService
      .open(content, {
        size,
      })
      .subscribe();
  }

  ngOnInit(): void {
  }

}
