import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/shared/project.service';
import { Searchproject } from 'src/app/shared/searchproject.model';
import { Project } from 'src/app/shared/project.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {

  projectSearch : string;
  constructor(private projectService: ProjectService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.projectService.refreshList();
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

  editProject(p: Searchproject) {
    this.projectService.isUpdate = true;
    if(p.Project_Start_Date == '01/01/0001' || p.Project_Start_Date == '1/1/1901')
    {
      p.Project_Start_Date = null;
      p.Start_Date = null;
    }
      
    if(p.Project_End_Date == '01/01/0001' || p.Project_End_Date == '1/1/1901')
    {
      p.Project_End_Date = null;
      p.End_Date = null;
    }
      
      
    if(p.Project_Start_Date != null)
    {
      this.projectService.setDateCheckBox = true;
    }
    else
    {
      this.projectService.setDateCheckBox = false;
    }

    var project: Project;
    project = {
      Project_ID : p.Project_ID,
      ProjectName : p.ProjectName,
      Start_Date : p.Start_Date,
      End_Date : p.End_Date,
      Priority : p.Project_Priority,
      Manager : p.User_FullName,
      Manager_ID : p.User_ID
    };
    this.projectService.formData = Object.assign({}, project);
  }

  deleteProject(id: number) {
    if (confirm('Are you sure to delete this project?')) {
      this.projectService.deleteProject(id).subscribe(res => {
        this.projectService.refreshList();
        this.toastr.warning('Project Deleted successfully', 'Project Manager');
      });
    }
  }

  SortProject(sort: string){
    
    if(sort == "Start_Date")
    {
      this.projectService.searchProjectResult.sort((a, b) => {
        if (a.Start_Date < b.Start_Date) return -1;
        else if (a.Start_Date > b.Start_Date) return 1;
        else return 0;
      });
    }
    else if(sort == "End_Date")
    {
      this.projectService.searchProjectResult.sort((a, b) => {
        if (a.End_Date < b.End_Date) return -1;
        else if (a.End_Date > b.End_Date) return 1;
        else return 0;
      });
    }
    else if(sort == "Priority")
    {
      this.projectService.searchProjectResult.sort((a, b) => {
        if (a.Project_Priority < b.Project_Priority) return -1;
        else if (a.Project_Priority > b.Project_Priority) return 1;
        else return 0;
      });
    }
    else if(sort == "Completed")
    {
      this.projectService.searchProjectResult.sort((a, b) => {
        if (a.No_OfTaskCompleted < b.No_OfTaskCompleted) return -1;
        else if (a.No_OfTaskCompleted > b.No_OfTaskCompleted) return 1;
        else return 0;
      });
    }  
  } 
}
