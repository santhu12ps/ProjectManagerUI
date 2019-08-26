import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { ProjectService } from 'src/app/shared/project.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/shared/user.service';
import { ParentTaskService } from 'src/app/shared/parent-task.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { ParentTask } from 'src/app/shared/parent-task.model';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {

  userSearch: string;
  taskSearch : string;
  projectSearch : string;
  dateValue:Date;
  constructor(private taskService : TaskService, 
    private parentTaskService: ParentTaskService,
    private projectService: ProjectService,
    private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private router: Router,) { }

  ngOnInit() {
    this.userService.refreshList();
    this.parentTaskService.getParentTaskList();
    this.projectService.refreshList();
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

    this.taskService.isUpdate = false;
    this.taskService.isViewOnly = false;
    this.taskService.isEdit = false;
    this.router.navigateByUrl('/tasks');
  }
  
  onSubmit(form: NgForm) {
    if (form.value.Task_ID != null)
      this.updateTask(form);
  }
  updateTask(form: NgForm){
    if(this.compareDates()){
      this.taskService.putTask(form.value)
      .subscribe(result => {
        this.toastr.warning("Task updated successfully!!!","Task Manager");
        this.resetForm(form);
      });
    }
   }

   openParentTaskModalPopup(parentTaskContent) {
    this.taskSearch = '';
    this.modalService.open(parentTaskContent, { size: 'lg' });
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
  populateUserName(u: User) {
    this.taskService.formData.User_ID = u.User_ID;
    this.taskService.formData.UserName = u.First_Name;
    this.modalService.dismissAll();
  }
  
  compareDates(){
  if(new Date(this.taskService.formData.Start_Date) > new Date(this.taskService.formData.End_Date)){
      this.toastr.error('Start_Date should not be greaterthan End_Date', 'Task Manager');
      return false;
    }
    return true;
  }
}
