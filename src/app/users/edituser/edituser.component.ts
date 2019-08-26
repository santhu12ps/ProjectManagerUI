import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private userService: UserService, 
    private toastr: ToastrService) { }

  ngOnInit() {
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
    this.userService.isUpdate = false;
  }

  onSubmit(form: NgForm) {
    if (form.value.User_ID != null)
      this.updateUser(form);
  }

  updateUser(form: NgForm){
    this.userService.putUser(form.value).subscribe(res => {
      this.toastr.info('User updated successfully', 'Project Manager');
      this.resetForm(form);
      this.userService.refreshList();
    });
  }

}
