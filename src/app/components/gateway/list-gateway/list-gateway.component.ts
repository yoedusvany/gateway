import { Component, OnInit } from '@angular/core';
import { GatewayI } from 'src/app/interfaces/gateway';
import { GatewayService } from 'src/app/services/gateway.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogDetailsComponent } from '../../dialogs/dialog-details/dialog-details.component';
import { ViewEncapsulation } from '@angular/core';
import { DialogAddGatewayComponent } from '../../dialogs/dialog-add-gateway/dialog-add-gateway.component';

@Component({
  selector: 'app-list-gateway',
  templateUrl: './list-gateway.component.html',
  styleUrls: ['./list-gateway.component.css']
})
export class ListGatewayComponent implements OnInit {
  private gws: GatewayI[] = [];
  private gwSelected: GatewayI;

  private displayedColumns = ['humanName', 'ip', 'actions'];

  encapsulation: ViewEncapsulation.None;

  constructor(
    private _gatewayService: GatewayService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this._gatewayService.getAll().subscribe(data => (this.gws = data));
  }

  addDevice(row) {
    this._gatewayService.get(row._id).subscribe(data => {
      this.openDetails(row);
    });
  }

  openDetails(gw) {
    let dialogRef = this.dialog.open(DialogDetailsComponent, {
      data: {
        gw: gw
      },
      width: "750px",
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  addGateway() {
    let dialogRef = this.dialog.open(DialogAddGatewayComponent, {
      width: "750px",
    });
    dialogRef.afterClosed().subscribe(result => {
      this._gatewayService.getAll().subscribe(data => (this.gws = data));
    });
  }

  removeGateway(element) {
    this._gatewayService.removeGateway(element._id).subscribe(result => {
      if (result.result) {
        this._snackBar.open('Gateway removed', 'Ok', { duration: 4000 })
        this._gatewayService.getAll().subscribe(data => (this.gws = data));
      } else {
        let text = result.text;
        this._snackBar.open('Error', text.toString(), { duration: 4000 })
      }
    });
  }
}
