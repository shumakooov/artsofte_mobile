import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';
import {TuiValidationError} from '@taiga-ui/cdk';
import {TuiFileLike} from '@taiga-ui/kit';

@Component({
  selector: 'app-input-files',
  templateUrl: './input-files.component.html',
  styleUrls: ['./input-files.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFilesComponent implements OnInit {
  readonly control = new FormControl([], [maxFilesLength(5)]);
  rejectedFiles: readonly TuiFileLike[] = [];

  ngOnInit(): void {
    this.control.statusChanges.subscribe(response => {
      console.info(`STATUS`, response);
      console.info(`ERRORS`, this.control.errors, `\n`);
    });
  }

  onReject(files: TuiFileLike | readonly TuiFileLike[]): void {
    this.rejectedFiles = [...this.rejectedFiles, ...(files as TuiFileLike[])];
  }

  removeFile({name}: File): void {
    this.control.setValue(
      this.control.value?.filter((current: File) => current.name !== name) ?? [],
    );
  }

  clearRejected({name}: TuiFileLike): void {
    this.rejectedFiles = this.rejectedFiles.filter(
      rejected => rejected.name !== name,
    );
  }
}

export function maxFilesLength(maxLength: number): ValidatorFn {
  return ({value}: AbstractControl) => {
    return value.length > maxLength
      ? {
        maxLength: new TuiValidationError(
          `Error: maximum limit - 5 files for upload`,
        ),
      }
      : null;
  };

}
