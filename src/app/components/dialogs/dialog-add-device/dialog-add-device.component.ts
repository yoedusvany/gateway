import { Component, OnInit, Inject } from '@angular/core';
import { DeviceI } from 'src/app/interfaces/device';
import { GatewayI } from 'src/app/interfaces/gateway';
import { DeviceService } from 'src/app/services/device.service';

//---------------------------
// Angular Forms
//---------------------------
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

//---------------------------
// Material Dialog
//---------------------------
import { MAT_DIALOG_DATA, MatSnackBar } from "@angular/material";
import { MatDialogRef } from "@angular/material";


@Component({
  selector: 'app-dialog-add-device',
  templateUrl: './dialog-add-device.component.html',
  styleUrls: ['./dialog-add-device.component.css']
})
export class DialogAddDeviceComponent implements OnInit {
  public form: FormGroup;
  public uid: string;
  public vendor: string;
  public date: Date = new Date();
  public status: boolean = false;
  public gw: GatewayI;

  //---------------------------------------------------------------------------
  // Private Fields Section
  //---------------------------------------------------------------------------
  private dialogRef: MatDialogRef<DialogAddDeviceComponent>;
  
  private fb: FormBuilder;

  

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    dr: MatDialogRef<DialogAddDeviceComponent>,
    private deviceService: DeviceService,
    fb: FormBuilder,
    private _snackBar : MatSnackBar
  ) {
    this.dialogRef = dr;
    this.fb = fb;
  }

  ngOnInit() {
    this.gw = this.data.gw;
    this.createForm();
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  public addDevice() {

    this.deviceService.getDevices(this.gw._id).subscribe(data => {
      this.dialogRef.close();
    });
  }

  //---------------------------------------------------------------------------
  // creating the Form
  //---------------------------------------------------------------------------
  createForm() {
    this.form = this.fb.group({

      'uid': ['', Validators.compose([
          Validators.required, 
          Validators.pattern("^[0-9]*$")])],
      'vendor': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'date': [''],
      'status': ['', Validators.compose([])]
    });
  }

  onSubmit() {
    let device: DeviceI = {
      UID: this.form.controls["uid"].value,
      vendor: this.form.controls["vendor"].value,
      date: this.date,
      status: (this.form.controls["status"].value) ? true : false,
      gw_id  : this.gw._id
    }

    this.deviceService.addDevice(device).subscribe(result => {
      console.log(result);
      
      if(result.result){
        this._snackBar.open('Device added', 'Ok', { duration : 4000})
        this.closeDialog();
      }else{
        let text = result.text;
        this._snackBar.open('Error', text.toString(), { duration : 4000})
      }
    })



  }

}
