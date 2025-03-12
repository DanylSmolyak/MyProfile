import {Component, OnInit} from '@angular/core';
import {Project} from '../../models/Project';
import {ProjectsService} from '../../services/projects.service';
import {Router, RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})

export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projects = this.projectsService.getAllProjects();
  }
}
