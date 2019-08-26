import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Searchtask } from './searchtask.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  formData : Task;
  taskList : Searchtask[];
  isUpdate: boolean = false;
  isEdit: boolean = false;
  isViewOnly:boolean = false;
  constructor(private http : HttpClient) { }
  postTask(formData : Task){
    return this.http.post(environment.routeURL+'/task',formData);     
   }

  putTask(formData : Task){
    return this.http.put(environment.routeURL+'/task/'+formData.Task_ID,formData);     
   }
  deleteTask(id){
    return this.http.delete(environment.routeURL+'/task/'+id);
  }
  refreshTaskList(){
    this.http.get(environment.routeURL+'/task')
    .toPromise().then(res => this.taskList = res as Searchtask[]);
  }
}
