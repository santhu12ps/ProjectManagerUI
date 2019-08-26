import { Injectable } from '@angular/core';
import { ParentTask } from './parent-task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ParentTaskService {
  formData : ParentTask;
  parentTaskList : ParentTask[];
  constructor(private http : HttpClient) { }

  postParentTask(formData : ParentTask){   
    return this.http.post(environment.routeURL+'/parenttask',formData);     
   }
  getParentTaskList(){
    this.http.get(environment.routeURL+'/parenttask')
    .toPromise().then(res => this.parentTaskList = res as ParentTask[]);
  }
}
