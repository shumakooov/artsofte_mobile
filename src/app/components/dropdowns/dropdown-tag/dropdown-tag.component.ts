import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FilterService} from "../../../services/filter.service";

@Component({
  selector: 'app-dropdown-tag',
  templateUrl: './dropdown-tag.component.html',
  styleUrls: ['./dropdown-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownTagComponent implements OnInit {
  readonly control = new FormControl();

  tags: string[]
  constructor(private filterService: FilterService) { }
  ngOnInit(): void {
    this.filterService.getFilters().subscribe(filters => {
      this.tags = filters.tags.map(value => {return value.name})
    })
  }
}
