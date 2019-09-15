import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { DeviceI } from 'src/app/interfaces/device';
import { GatewayI } from 'src/app/interfaces/gateway';
import { DeviceService } from 'src/app/services/device.service';

//---------------------------
// Material Dialog
//---------------------------
import { MAT_DIALOG_DATA, MatDialog } from "@angular/material";
import { MatDialogRef, MatIcon } from "@angular/material";
import { DialogAddDeviceComponent } from '../dialog-add-device/dialog-add-device.component';




@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.css']
})
export class DialogDetailsComponent implements OnInit {
  //---------------------------------------------------------------------------
  // Public Fields Section
  //---------------------------------------------------------------------------
  public devices: DeviceI[] = [];
  public displayedColumns = ['vendor', 'date', 'status', 'actions'];
  public gw : GatewayI;


  //---------------------------------------------------------------------------
  // Private Fields Section
  //---------------------------------------------------------------------------
  private dialogRef: MatDialogRef<DialogDetailsComponent>;
  private dialogRef1: MatDialogRef<DialogAddDeviceComponent>;
  
  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    dr: MatDialogRef<DialogDetailsComponent>,
    private deviceService : DeviceService,
    public dialog	: MatDialog,
    public dialog1	: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    this.dialogRef = dr;
  }

  ngOnInit() {
    this.gw = this.data.gw;

    this.deviceService.getDevices(this.gw._id).subscribe(data => {
      this.devices = data;
      console.log(this.devices.length);
      
    });
    
  }

  public addDevice(){
    let dialogRef1 = this.dialog.open(DialogAddDeviceComponent, {
      data: {
        gw: this.gw
      },
      width: "400px",
    });
    dialogRef1.afterClosed().subscribe(result => {
      this.deviceService.getDevices(this.gw._id).subscribe(data => {
        this.devices = data;
      });
    });

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  removeDevice(element) {
    this.deviceService.removeDevice(element._id).subscribe(result => {
      if (result.result) {
        this._snackBar.open('Device removed', 'Ok', { duration: 4000 })
        this.deviceService.getDevices(this.gw._id).subscribe(data => {
          this.devices = data;
        });
      } else {
        let text = result.text;
        this._snackBar.open('Error', text.toString(), { duration: 4000 })
      }
    });
  }

}