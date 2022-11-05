import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  //Слайдер, выбор диагонали
  readonly min = 0;
  readonly max = 50;
  readonly sliderStep = 0.1;
  readonly steps = (this.max - this.min) / this.sliderStep;
  readonly quantum = 0.01;
  readonly control = new FormControl(6.5);

  constructor() { }

  ngOnInit(): void {
  }

}
