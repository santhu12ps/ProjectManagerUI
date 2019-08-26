import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ParentTaskService } from 'src/app/shared/parent-task.service';
import { ProjectService } from 'src/app/shared/project.service';
import { UserService } from 'src/app/shared/user.service';
import { ParentTask } from 'src/app/shared/parent-task.model';
import { User } from 'src/app/shared/user.model';
import { Searchproject } from 'src/app/shared/searchproject.model';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  
  setParentCheckBox : boolean = false;
  userSearch: string;
  taskSearch : string;
  projectSearch : string;
  dateValue:Date;

  constructor(private taskService : TaskService, 
    private parentTaskService: ParentTaskService,
    private projectService: ProjectService,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.resetForm(); 
    this.taskService.isUpdate = false;
    this.userService.refreshList();
    this.parentTaskService.getParentTaskList();
    this.projectService.refreshList(); 
    
    //Set default date
    this.setDefaultDate();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
 
    this.taskService.formData = {
     Task_ID : null,
     Parent_ID : null,
     Project_ID: null,
     TaskName: '',
     Start_Date:null,
     End_Date:null,
     TaskPriority:0,
     ParentTask : '',
     Status:'',
     ProjectName:'',
     User_ID:null,
     UserName:''
    }
    //Set default date
    this.setDefaultDate();
    
    this.taskService.isUpdate = false;
    this.taskService.isViewOnly = false;
    this.taskService.isEdit = false;
  }

  setDefaultDate(){
    this.taskService.formData.Start_Date = new Date();
    this.dateValue = new Date();
    this.dateValue.setDate( this.dateValue.getDate() + 1 );
    this.taskService.formData.End_Date = this.dateValue; 
  }
  onSubmit(form: NgForm) {
    if (form.value.Task_ID == null)
      this.addTask(form);
  }

  addTask(form : NgForm){
    if(this.setParentCheckBox)
    {
      var parnt: ParentTask;
      parnt = {
        Parent_ID : this.taskService.formData.Parent_ID,
        Parent_Task : this.taskService.formData.TaskName
      };

      this.parentTaskService.postParentTask(parnt).subscribe(res => {
        this.toastr.success('Parent Task created successfully!!!', 'Project Manager');
        this.resetForm(form);
        this.taskService.refreshTaskList();
        this.parentTaskService.getParentTaskList();
      });
    }
    else
    {
      if(this.compareDates())
      {
        this.taskService.postTask(form.value).subscribe(res => {
          this.toastr.success('Task created successfully!!!', 'Project Manager');
          this.resetForm(form);
          this.taskService.refreshTaskList();
        });
      }      
    }
   }
   

   resetParentControl(form?: NgForm) {
    this.setParentCheckBox = !this.setParentCheckBox;
    if(this.setParentCheckBox)
    {
      this.taskService.formData.Start_Date = null;
      this.taskService.formData.End_Date = null;
      this.taskService.formData.Parent_ID = null;
      this.taskService.formData.ParentTask = null;
      this.taskService.formData.UserName = null;
      this.taskService.formData.User_ID = null;
      this.taskService.formData.Project_ID = null;
      this.taskService.formData.ProjectName = null;
    }  
  }
  
  openParentTaskModalPopup(parentTaskContent) {
    this.taskSearch = '';
    this.modalService.open(parentTaskContent, { size: 'lg' });
  }
  openProjectModalPopup(projectcontent) {
    this.projectSearch = '';
    this.modalService.open(projectcontent, { size: 'lg' });
  }
  openUserModalPopup(usercontent) {
    this.userSearch = '';
    this.modalService.open(usercontent, { size: 'lg' });
  }

  populateTask(t: ParentTask) {
    this.taskService.formData.Parent_ID = t.Parent_ID;
    this.taskService.formData.ParentTask = t.Parent_Task;
    this.modalService.dismissAll();
  }

  populateProject(p: Searchproject) {
    this.taskService.formData.Project_ID = p.Project_ID;
    this.taskService.formData.ProjectName = p.ProjectName;
    this.modalService.dismissAll();
  }

  populateUser(u: User) {
    this.taskService.formData.User_ID = u.User_ID;
    this.taskService.formData.UserName = u.First_Name;
    this.modalService.dismissAll();
  }

  filterProject(){
    if(this.projectSearch != '')
    {
      this.projectService.searchProjectResult = Object.assign([], this.projectService.searchProjectResult).filter(
        item => item.ProjectName.toLowerCase().indexOf(this.projectSearch.toLowerCase()) > -1
     ) 
    }
    else
    {
      this.projectService.refreshList();
    }    
  }

  filterTask(){
    if(this.taskSearch != '')
    {
      this.parentTaskService.parentTaskList = Object.assign([], this.parentTaskService.parentTaskList).filter(
        item => item.Parent_Task.toLowerCase().indexOf(this.taskSearch.toLowerCase()) > -1
     ) 
    }
    else
    {
      this.taskService.refreshTaskList();
    }    
  }

  filterUser(){
    if(this.userSearch != '')
    {
      this.userService.userList = Object.assign([], this.userService.userList).filter(
        item => item.First_Name.toLowerCase().indexOf(this.userSearch.toLowerCase()) > -1
     ) 
    }
    else
    {
      this.userService.refreshList();
    }    
  }
   compareDates(){
    if(new Date(this.taskService.formData.Start_Date) > new Date(this.taskService.formData.End_Date)){
        this.toastr.error('Start Date should not be greater than End Date', 'Task Manager');
        return false;
      }
      return true;
    }
}
