import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddGatewayComponent } from './dialog-add-gateway.component';

describe('DialogAddGatewayComponent', () => {
  let component: DialogAddGatewayComponent;
  let fixture: ComponentFixture<DialogAddGatewayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddGatewayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddGatewayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
