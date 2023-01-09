import {Component, OnInit, Optional} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ModalCancelReserveComponent} from "../modal-cancel-reserve/modal-cancel-reserve.component";

@Component({
  selector: 'app-modal-confirm-cancel-reserve',
  templateUrl: './modal-confirm-cancel-reserve.component.html',
  styleUrls: ['./modal-confirm-cancel-reserve.component.scss']
})
export class ModalConfirmCancelReserveComponent implements OnInit {

  constructor(@Optional() public dialogCancelReserve: MatDialogRef<ModalConfirmCancelReserveComponent>,
              @Optional() public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeConfirmCancelReserveDialog(): void {
    this.dialogCancelReserve.close()
  }

  openCancelReserveDialog(): void {
    const dialogCard = this.dialog.open(ModalCancelReserveComponent, {
      panelClass: 'custom-modalbox'
    });
  }
}
