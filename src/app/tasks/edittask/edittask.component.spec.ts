import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskComponent } from './edittask.component';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

describe('EdittaskComponent', () => {
  let component: EdittaskComponent;
  let fixture: ComponentFixture<EdittaskComponent>;

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
      MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
    ],
      declarations: [ EdittaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
