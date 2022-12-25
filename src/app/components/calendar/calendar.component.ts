import {ChangeDetectionStrategy, Component, Inject, Injector} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiMobileCalendarDialogComponent} from '@taiga-ui/addon-mobile';
import {tuiControlValue, TuiDay} from '@taiga-ui/cdk';
import {TUI_MONTHS, TuiDialogService} from '@taiga-ui/core';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {map, startWith, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  private readonly control = new FormControl(new TuiDay(2020, 9, 3));

  private readonly dialog$: Observable<TuiDay>;

  readonly date$ = this.control.valueChanges.pipe(
    startWith(this.control.value),
    withLatestFrom(this.months),
    map(([value, months]) => this.getParsed(value, months)),
  );

  constructor(
    @Inject(TuiDialogService) dialogService: TuiDialogService,
    @Inject(Injector) injector: Injector,
    @Inject(TUI_MONTHS) private readonly months: Observable<string[]>,
  ) {
    const dataStream = tuiControlValue(this.control);
    const computedInjector = Injector.create({
      providers: [
        {
          provide: TUI_CALENDAR_DATE_STREAM,
          useValue: dataStream,
        },
      ],
      parent: injector,
    });
    const content = new PolymorpheusComponent(
      TuiMobileCalendarDialogComponent,
      computedInjector,
    );

    this.dialog$ = dialogService.open(content, {
      size: `fullscreen`,
      closeable: false,
      data: {
        min: TuiDay.currentLocal(),
      },
    });
  }

  get empty(): boolean {
    return !this.control.value;
  }

  getParsed(value: TuiDay | null, months: string[]): string {
    if (!value) {
      return `Choose a date`;
    }

    const {month, day, year} = value;

    return `${months[month]} ${day}, ${year}`;
  }

  onClick(): void {
    this.dialog$.subscribe(value => {
      this.control.setValue(value);
    });
  }

}
