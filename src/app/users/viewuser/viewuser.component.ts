import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  userSearch: string;
  constructor(private userService: UserService,
    private toastr: ToastrService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.userService.refreshList();
  }

  editUser(user: User) {
    this.userService.isUpdate = true;
    this.userService.formData = Object.assign({}, user);
  }
  
  deleteUser(id: number) {
    if (confirm('Are you sure to delete this user?')) {
      this.userService.deleteUser(id).subscribe(res => {
        this.userService.refreshList();
        this.toastr.warning('User deleted successfully', 'Project Manager');
      });
    }
  }
  openUserModalPopup(usercontent) {
    this.userSearch = '';
    this.modalService.open(usercontent, { size: 'lg' });
  }

  populateUser(u: User) {
    this.userSearch = u.First_Name;
    this.filterUser();
    this.modalService.dismissAll();
  }
  SortUser(sort: string){
    
    if(sort == "First_Name")
    {
      this.userService.userList.sort((a, b) => {
        if (a.First_Name < b.First_Name) return -1;
        else if (a.First_Name > b.First_Name) return 1;
        else return 0;
      });
    }
    else if(sort == "Last_Name")
    {
      this.userService.userList.sort((a, b) => {
        if (a.Last_Name < b.Last_Name) return -1;
        else if (a.Last_Name > b.Last_Name) return 1;
        else return 0;
      });
    }
    else if(sort == "Employee_ID")
    {
      this.userService.userList.sort((a, b) => {
        if (a.Employee_ID < b.Employee_ID) return -1;
        else if (a.Employee_ID > b.Employee_ID) return 1;
        else return 0;
      });
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
}
