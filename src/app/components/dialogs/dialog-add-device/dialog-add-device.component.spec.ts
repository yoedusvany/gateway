import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddDeviceComponent } from './dialog-add-device.component';

describe('DialogAddDeviceComponent', () => {
  let component: DialogAddDeviceComponent;
  let fixture: ComponentFixture<DialogAddDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
