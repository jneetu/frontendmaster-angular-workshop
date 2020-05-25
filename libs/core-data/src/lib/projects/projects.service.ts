import { Injectable } from '@angular/core';
import { Project } from './project';
import { HttpClient } from '@angular/common/http';

 const Base_url ="http://localhost:3000/";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  //  private  projects: Project[] = [
  //   {
  //     id: '1',
  //     title: 'Remote Project One',
  //     details: 'This is a sample project',
  //     percentComplete: 20,
  //     approved: false,
  //   },
  //   {
  //     id: '2',
  //     title: 'Remote Project Two',
  //     details: 'This is a sample project',
  //     percentComplete: 40,
  //     approved: false,
  //   },
  //   {
  //     id: '3',
  //     title: 'Remote Project Three',
  //     details: 'This is a sample project',
  //     percentComplete: 100,
  //     approved: true,
  //   }
  // ];
model= 'projects';
  constructor( private httpClient: HttpClient) { }


  // all() :Project[] {
  //   return this.projects;
  // }

  getUrl(){
    return `${Base_url}${this.model}`;
  }
  getUrlForID(id){
    return `${this.getUrl()}/${id}`;
  }
  all() {
    return this.httpClient.get(`${Base_url}${this.model}`)
  }

  create(project){
    return this.httpClient.post(this.getUrl(), project);
  }

  update(project){
    return this.httpClient.patch(this.getUrlForID(project.id), project);
  }
  delete(projectid){
    return this.httpClient.delete(this.getUrlForID(projectid));
  }
}
