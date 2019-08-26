import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

import { ProjectsComponent } from './projects/projects.component';
import { AddprojectComponent } from './projects/addproject/addproject.component';
import { EditprojectComponent } from './projects/editproject/editproject.component';
import { ViewprojectComponent } from './projects/viewproject/viewproject.component';
import { UsersComponent } from './users/users.component';
import { AdduserComponent } from './users/adduser/adduser.component';
import { EdituserComponent } from './users/edituser/edituser.component';
import { ViewuserComponent } from './users/viewuser/viewuser.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddtaskComponent } from './tasks/addtask/addtask.component';
import { EdittaskComponent } from './tasks/edittask/edittask.component';
import { ViewtaskComponent } from './tasks/viewtask/viewtask.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        AppRoutingModule,
        MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
      ],
      declarations: [
        AppComponent,
        ProjectsComponent,
        AddprojectComponent,
        EditprojectComponent,
        ViewprojectComponent,
        UsersComponent,
        AdduserComponent,
        EdituserComponent,
        ViewuserComponent,
        TasksComponent,
        AddtaskComponent,
        EdittaskComponent,
        ViewtaskComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Project Manager'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Project Manager');
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Project Manager');
  });
});
