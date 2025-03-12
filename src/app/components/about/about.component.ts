import {Component, OnInit} from '@angular/core';
import {SkillsComponent} from '../skills/skills.component';
import {RouterLink} from '@angular/router';
import {ProjectsComponent} from '../projects/projects.component';
import {WorkExperienceComponent} from '../work-experience/work-experience.component';

@Component({
  selector: 'app-about',
  imports: [
    SkillsComponent,
    RouterLink,
    ProjectsComponent,
    WorkExperienceComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  personalInfo = {
    name: 'SMOLYAK DANYLO',
    title: '.Net developer',
    yearsExperience: '2023-2024',
    description: 'I am a motivated .NET developer with strong analytical thinking and a fast learning ability. I adapt quickly and continuously seek improvement. I am looking for a company where I can enhance my skills and grow into a highly skilled technical specialist.',
    experience: '1.5 года опыта',
    email: 'smolakdanil35@gmail..com',
    phone: '+380 955 433 084',
    location: 'Kyiv',
    linkedin: 'https://linkedin.com/in/yourprofile',
    github: 'https://github.com/yourusername',
    telegram: 'https://t.me/yourusername'
  };
}
