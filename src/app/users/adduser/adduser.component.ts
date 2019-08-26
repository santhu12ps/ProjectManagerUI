import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  
  constructor(private userService: UserService, 
    private toastr: ToastrService) { }
  
  ngOnInit() {
   this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();
 
    this.userService.formData = {

    User_ID : null,
    First_Name : '',
    Last_Name : '',
    Employee_ID :null,   
    Project_ID: null,
    Task_ID : null,    
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.User_ID == null)
      this.addUser(form);
  }

  addUser(form: NgForm){
    this.userService.postUser(form.value).subscribe(res => {
      this.toastr.success('User added successfully', 'Project Manager');
      this.resetForm(form);
      this.userService.refreshList();
    });
  }
}
