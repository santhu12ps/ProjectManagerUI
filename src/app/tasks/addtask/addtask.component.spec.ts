import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskComponent } from './addtask.component';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports:[
      FormsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
      MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
    ],
      declarations: [ AddtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
