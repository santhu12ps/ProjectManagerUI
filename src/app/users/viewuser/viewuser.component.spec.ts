import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserComponent } from './viewuser.component';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewuserComponent', () => {
  let component: ViewuserComponent;
  let fixture: ComponentFixture<ViewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports:[
      FormsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      RouterTestingModule,
    ],
      declarations: [ ViewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
