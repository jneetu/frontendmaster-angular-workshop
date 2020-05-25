import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ProjectsModule } from './projects.module';
import { ProjectsComponent } from './projects.component';


const routes: Routes = [
  {path: '', component: ProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
