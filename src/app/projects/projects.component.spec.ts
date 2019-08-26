import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectsComponent } from './projects.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AddprojectComponent } from "./addproject/addproject.component";
import { ProjectService } from '../shared/project.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
      imports:[
        FormsModule,BrowserModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
      ],
      declarations: [ ProjectsComponent, AddprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
