import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewtaskComponent } from './tasks/viewtask/viewtask.component';

const routes: Routes = 
[
  {
    path:'',
    redirectTo:'/projects',
    pathMatch:'full'
  },
  {
    path:'projects',
    component:ProjectsComponent
  },
  {
    path:'tasks',
    component:TasksComponent
  },
  {
    path:'users',
    component: UsersComponent
  },
  {
    path:'viewtask',
    component: ViewtaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
