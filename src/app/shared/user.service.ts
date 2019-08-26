import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData : User;
  userList : User[];
  isUpdate : boolean = false;
  constructor(private http : HttpClient) { }

  postUser(formData : User){   
    return this.http.post(environment.routeURL+'/user',formData);     
   }
  refreshList(){
    this.http.get(environment.routeURL+'/user')
    .toPromise().then(res => this.userList = res as User[]);
  }
  putUser(formData : User){
    return this.http.put(environment.routeURL+'/user/'+formData.User_ID,formData);     
   }

   deleteUser(id : number){
    return this.http.delete(environment.routeURL+'/user/'+id);
   }
}
