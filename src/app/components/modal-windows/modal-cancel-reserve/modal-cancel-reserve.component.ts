import {Component, OnInit, Optional} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-modal-cancel-reserve',
  templateUrl: './modal-cancel-reserve.component.html',
  styleUrls: ['./modal-cancel-reserve.component.scss']
})
export class ModalCancelReserveComponent implements OnInit {

  constructor(@Optional() public dialogCancelReserve: MatDialogRef<ModalCancelReserveComponent>) { }

  ngOnInit(): void {
  }

  closeCancelReserveDialog(): void {
    this.dialogCancelReserve.close()
  }

  reloadLocation(){
    location.reload()
  }
}
