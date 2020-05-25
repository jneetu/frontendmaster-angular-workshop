import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from "@workshop/core-data"
import { observable, Observable } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
 primaryColor= "red";

  // projects:Project[];
  projects$
  selectedProject: Project;
  

  constructor( private projectsService: ProjectsService) { 
 

  }

  ngOnInit() {
     this.getProjects();
     this.resetProject();
  }
  selectProject(project){
    this.selectedProject = project;
    console.log("Selected hello Project", project);
  }
// getProjects(){
//   this.projects = this.projectsService.all();
// }
resetProject(){
  const emptyProject : Project = {
    id: '',
     title: '',
    details: '',
    percentComplete: 0,
    approved: false
  }

  this.selectProject(emptyProject);
}

getProjects(){
  //  this.projectsService.all() 
  //  .subscribe((result :any) => this.projects = result);
  this.projects$= this.projectsService.all();
}

saveProject(project){
  // console.log("SAVED Project", project);
  if(! project.id){
    this.createProject(project);
  } else{
    this.updateProject(project);
  }
}
updateProject(project){
  this.projectsService.update(project)
  .subscribe(result => {
    this.getProjects();
    this.resetProject();
  });
}
createProject(project){
  this.projectsService.create(project)
  .subscribe(result => {
    this.getProjects();
    this.resetProject();
  });
}
deleteProject(project){
  console.log("Delected hello Project", project);
  // this.projectsService.delete(project.id)
  // .subscribe(result => this.getProjects());
}
  cancel(){
    this.resetProject();
  }
}
