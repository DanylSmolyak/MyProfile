import {Component, OnInit} from '@angular/core';
import {Project} from '../../../models/Project';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ProjectsService} from '../../../services/projects.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.project = this.projectsService.getProjectById(id);

      if (!this.project) {
        this.router.navigate(['/projects']);
      }
    });
  }
}
