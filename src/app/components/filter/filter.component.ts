import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDay} from "@taiga-ui/cdk";
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {DeviceService} from "../../services/device.service";
import {ListDevicesPageComponent} from "../../pages/list-devices-page/list-devices-page.component";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnInit {
  public searchTerm: string;

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.deviceService.search.next(this.searchTerm);
  }

  //Range, выбор диагонали
  max: number;
  readonly min = 0;
  rangeValue = [0, 0];
  readonly step = 0.5;

  //Календарь
  readonly testForm = new FormGroup({
    testValue: new FormControl(new TuiDay(2017, 0, 15)),
  });

  //Dialog
  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
              private deviceService: DeviceService,
              private listDevicesComp: ListDevicesPageComponent,
              private filterService: FilterService
  ) {
  }

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
    this.filterService.getFilters().subscribe(filters => {
      this.max = filters.maxLen
      this.rangeValue = [0, filters.maxLen]
      this.deviceService.diagonalRange.next(this.rangeValue)
    })
  }

  handleDept(id: number) {
    this.deviceService.deptId.next(id);
  }

  handleType(id: number) {
    this.deviceService.typeId.next(id);
  }

  handleSystem(id: number) {
    this.deviceService.systemId.next(id);
  }

  handleDiagonal() {
    this.deviceService.diagonalRange.next(this.rangeValue)
  }

  handleSort(sort: string) {
    this.deviceService.sort.next(sort)
  }

  doSearch() {
    this.listDevicesComp.getFilteredDevices()
  }
}
