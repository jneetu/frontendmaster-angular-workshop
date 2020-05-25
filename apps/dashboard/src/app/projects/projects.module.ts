import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { MaterialModule } from '@workshop/material';
import { FormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';


@NgModule({
  declarations: [ProjectsComponent, ProjectDetailsComponent, ProjectsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule,
    MaterialModule
  ],
  exports: [ProjectsComponent]

})
export class ProjectsModule { }
