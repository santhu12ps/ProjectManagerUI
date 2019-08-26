import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectService } from 'src/app/shared/project.service';
import { Searchproject } from 'src/app/shared/searchproject.model';
import { Searchtask } from 'src/app/shared/searchtask.model';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {

  searchProjectTask : string;
  
  constructor(private taskService: TaskService,
    private projectService: ProjectService,
    private toastr : ToastrService,
    private router: Router,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.taskService.refreshTaskList();
    this.projectService.refreshList();
  }

  editTask(tas: Searchtask, isEdit){
    this.taskService.isEdit = true;
    if(isEdit == 1){
      this.taskService.isUpdate = true;
      this.taskService.isViewOnly = false;
    }      
    else{
      this.taskService.isViewOnly = true;
      this.taskService.isUpdate = false;
    }

  var tsk: Task;
  if(tas.TaskStartDate == '01/01/0001')
      tsk.Start_Date = null;
  if(tas.TaskEndDate == '01/01/0001')
      tsk.End_Date = null;
  tsk = {
      Task_ID : tas.Task_ID,
      Parent_ID :tas.TaskParentID,
      Project_ID :tas.TaskProjectID,
      TaskName :tas.TaskName,
      Start_Date :tas.Start_Date,
      End_Date :tas.End_Date,
      TaskPriority : Number(tas.TaskPriority),
      Status :tas.TaskStatus,
      ProjectName:tas.MappedProject,
      ParentTask : tas.ParentTask,
      User_ID : tas.AssignedUserID,
      UserName:tas.First_Name,
    };
    this.taskService.formData = Object.assign({}, tsk);
  this.router.navigateByUrl('/tasks');
}
  endTask(taskId : number){
    if(confirm('Are you want to complete this task')){
     this.taskService.deleteTask(taskId)
     .subscribe(result => {
       this.toastr.success("Task completed successfully!!!","Project Manager");
       this.taskService.refreshTaskList();
     });
   }
 }

 filterProject(){
  if(this.searchProjectTask != '')
  {
    this.taskService.taskList = Object.assign([], this.taskService.taskList).filter(
      item => item.MappedProject.toLowerCase().indexOf(this.searchProjectTask.toLowerCase()) > -1
   ) 
  }
  else
  {
    this.taskService.refreshTaskList();
  }
} 
 openProjectModalPopup(projectContent) {
  this.searchProjectTask = '';
  this.modalService.open(projectContent, { size: 'lg' });
}
populateProjectName(pro: Searchproject) {
  this.searchProjectTask = pro.ProjectName;
  this.filterProject();
  this.modalService.dismissAll();
}
SortTask(sort: string){
    
  if(sort == "Start_Date")
  {
    this.taskService.taskList.sort((a, b) => {
      if (a.Start_Date < b.Start_Date) return -1;
      else if (a.Start_Date > b.Start_Date) return 1;
      else return 0;
    });
  }
  else if(sort == "End_Date")
  {
    this.taskService.taskList.sort((a, b) => {
      if (a.End_Date < b.End_Date) return -1;
      else if (a.End_Date > b.End_Date) return 1;
      else return 0;
    });
  }
  else if(sort == "Priority")
  {
    this.taskService.taskList.sort((a, b) => {
      if (a.TaskPriority < b.TaskPriority) return -1;
      else if (a.TaskPriority > b.TaskPriority) return 1;
      else return 0;
    });
  }
  else if(sort == "Status")
  {
    this.taskService.taskList.sort((a, b) => {
      if (a.TaskStatus < b.TaskStatus) return -1;
      else if (a.TaskStatus > b.TaskStatus) return 1;
      else return 0;
    });
  }  
} 
}
