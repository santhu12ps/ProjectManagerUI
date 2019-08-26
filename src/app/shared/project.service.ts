import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Searchproject } from './searchproject.model';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  formData : Project;
  projectList : Project[];
  setDateCheckBox:boolean=false;
  searchProjectResult : Searchproject[];
  isUpdate:boolean=false;
  constructor(private http : HttpClient) { }

  postProject(formData : Project){
    return this.http.post(environment.routeURL+'/project',formData);     
   }

  refreshList(){
    this.http.get(environment.routeURL+'/project')
    .toPromise().then(res => this.searchProjectResult = res as Searchproject[]);
  }

  putProject(formData : Project){
    return this.http.put(environment.routeURL+'/project/'+formData.Project_ID,formData);     
   }

   deleteProject(id : number){
    return this.http.delete(environment.routeURL+'/project/'+id);
   }
}
