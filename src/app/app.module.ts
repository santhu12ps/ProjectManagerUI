import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { TaskService } from './shared/task.service';
import { ParentTaskService } from './shared/parent-task.service';
import { ProjectService } from './shared/project.service';
import { UserService } from './shared/user.service';
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


@NgModule({
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
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
    AppRoutingModule
  ],
  entryComponents:[],
  providers: [TaskService,ParentTaskService,ProjectService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
