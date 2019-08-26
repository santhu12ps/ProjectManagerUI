import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectComponent } from './addproject.component';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

describe('AddprojectComponent', () => {
  let component: AddprojectComponent;
  let fixture: ComponentFixture<AddprojectComponent>;

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
      declarations: [ AddprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
