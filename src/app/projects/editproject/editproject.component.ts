import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  dateValue:Date;
  managerSearch: string;
  constructor(private projectService: ProjectService,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.projectService.isUpdate = true;
    this.userService.refreshList(); 
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
 
    this.projectService.formData = {
     Project_ID : null,
     ProjectName: '',
     Start_Date:null,
     End_Date:null,
     Priority:0,
     Manager : '',
     Manager_ID:null
    }
    this.projectService.isUpdate = false;
  }

  resetParentControl(form?: NgForm) {
    this.projectService.setDateCheckBox = !this.projectService.setDateCheckBox;
    if(this.projectService.setDateCheckBox)
    {
      this.projectService.formData.Start_Date = new Date();
      this.dateValue = new Date();
      this.dateValue.setDate( this.dateValue.getDate() + 1 );
      this.projectService.formData.End_Date = this.dateValue;
    }
    else
    {
      this.projectService.formData.Start_Date = null;
      this.projectService.formData.End_Date = null;
    }  
  }

  submit(form: NgForm) {
    if(this.compareTwoDates())
    {
      if (form.value.Project_ID != null)
      {
        this.updateProject(form);
      } 
    }    
  }

  updateProject(form: NgForm) {
    this.projectService.putProject(form.value).subscribe(res => {
      this.toastr.info('Project updated successfully', 'Project Manager');
      this.resetForm(form);
      this.projectService.refreshList();
    });
  }

  compareTwoDates(){
    if(new Date(this.projectService.formData.Start_Date) > new Date(this.projectService.formData.End_Date)){
       this.toastr.error('Start Date should not be greater than End Date', 'Project Manager');
       return false;
    }
    return true;
 }
  openManagerModalPopup(managerContent) {
    this.managerSearch = '';
    this.modalService.open(managerContent, { size: 'lg' });
  }
   populateManager(m: User) {
     this.projectService.formData.Manager_ID = m.User_ID;
     this.projectService.formData.Manager = m.First_Name;
     this.modalService.dismissAll();
   }
}
