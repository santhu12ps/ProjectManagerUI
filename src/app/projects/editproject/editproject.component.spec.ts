import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprojectComponent } from './editproject.component';
import { ProjectService } from 'src/app/shared/project.service';
import { UserService } from 'src/app/shared/user.service';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule  } from "@angular/material";

describe('EditprojectComponent', () => {
  let component: EditprojectComponent;
  let fixture: ComponentFixture<EditprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        FormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        MatTabsModule,MatDialogModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,MatFormFieldModule,MatInputModule,
      ],
      declarations: [ EditprojectComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
