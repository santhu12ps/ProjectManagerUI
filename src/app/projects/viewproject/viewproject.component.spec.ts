import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojectComponent } from './viewproject.component';
import { FormsModule } from "@angular/forms";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

describe('ViewprojectComponent', () => {
  let component: ViewprojectComponent;
  let fixture: ComponentFixture<ViewprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports:[
      FormsModule,
      HttpClientModule,
      ToastrModule.forRoot(),
    ],
      declarations: [ ViewprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
