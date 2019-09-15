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
import { GatewayService } from 'src/app/services/gateway.service';


@Component({
  selector: 'app-dialog-add-gateway',
  templateUrl: './dialog-add-gateway.component.html',
  styleUrls: ['./dialog-add-gateway.component.css']
})
export class DialogAddGatewayComponent implements OnInit {

  public form: FormGroup;

  //---------------------------------------------------------------------------
  // Private Fields Section
  //---------------------------------------------------------------------------
  private dialogRef: MatDialogRef<DialogAddGatewayComponent>;
  private fb: FormBuilder;

  private humanName: string;
  private ip: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    dr: MatDialogRef<DialogAddGatewayComponent>,
    private gatewayService: GatewayService,
    fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    this.dialogRef = dr;
    this.fb = fb;
  }

  ngOnInit() {
    this.createForm();
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  //---------------------------------------------------------------------------
  // creating the Form
  //---------------------------------------------------------------------------
  createForm() {
    this.form = this.fb.group({

      'humanName': ['', Validators.compose([
        Validators.required,
        ])
      ],
      'ip': ['', Validators.compose(
        [
          Validators.required,
          Validators.pattern( "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)")
        ])],
    });
  }

  onSubmit() {
    let gateway = {
      humanName: this.form.controls["humanName"].value,
      ip: this.form.controls["ip"].value
    }

    this.gatewayService.addGateway(gateway).subscribe(result => {
      if (result.result) {
        this._snackBar.open('Gateway added', 'Ok', { duration: 4000 })
        this.closeDialog();
      } else {
        let text = result.text;
        this._snackBar.open('Error', text.toString(), { duration: 4000 })
      }
    })
  }

}
