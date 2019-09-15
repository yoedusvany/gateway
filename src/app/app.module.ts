//MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatInputModule } from '@angular/material'
import { MatSnackBarModule } from '@angular/material'

//ROUTING
import { AppRoutingModule } from './app-routing.module';

//SERVICES
import { GatewayService } from './services/gateway.service';
import { DeviceService } from './services/device.service';

//COMPONENTS
import { ListGatewayComponent } from './components/gateway/list-gateway/list-gateway.component';
import { DialogDetailsComponent } from './components/dialogs/dialog-details/dialog-details.component';
import { AppComponent } from './app.component';
import { DialogAddDeviceComponent } from './components/dialogs/dialog-add-device/dialog-add-device.component';
import { DialogAddGatewayComponent } from './components/dialogs/dialog-add-gateway/dialog-add-gateway.component';


@NgModule({
  declarations: [
    AppComponent,
    ListGatewayComponent,
    DialogDetailsComponent,
    DialogAddDeviceComponent,
    DialogAddGatewayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //material modules
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  exports: [
    //material modules
    MatTableModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [GatewayService, DeviceService],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogDetailsComponent,
    DialogAddDeviceComponent,
    DialogAddGatewayComponent
  ],
})
export class AppModule { }
