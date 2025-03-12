import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';


interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  skills: string[];
}


@Component({
  selector: 'app-work-experience',
  imports: [
    NgForOf
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent implements OnInit {
  workExperience: WorkExperience[] = [
    {
      title: 'Software Developer',
      company: 'Fenrir',
      startDate: 'May 2024',
      endDate: 'Dec 2024',
      description: 'Developed and maintained web applications using ASP.NET Core and Angular. Designed and optimized REST APIs for e-commerce and business applications. Implemented authentication and authorization using JWT and ASP.NET Identity. Built admin panels and dashboards with Angular and TypeScript. Improved MS SQL database performance by optimizing queries and indexes.',
      skills: ['.NET Core', 'ASP.NET Identity', 'Angular', 'TypeScript', 'SQL Server', 'JWT', 'REST APIs']
    },
    {
      title: 'Computer Engineer',
      company: 'SERVIO',
      startDate: 'Sep 2023',
      endDate: 'Feb 2024',
      description: 'Diagnosed and fixed software and hardware issues on the SERVIO platform. Reviewed and fixed bugs in the codebase, improving software performance and stability. Created detailed reports for developers, contributing to software improvements. Conducted testing, troubleshooting, and configuration of software for customers.',
      skills: ['.NET Core', 'SignalR', 'SQL Server', 'JWT', 'WCF']
    },
    {
      title: '.NET Developer (Intern)',
      company: 'University Internship',
      startDate: 'May 2023',
      endDate: 'Aug 2023',
      description: 'Worked on an internal CRM system for managing customer interactions. Refactored existing codebase, improving maintainability and performance. Used Entity Framework Core for database interactions and LINQ for complex queries. Developed Angular components for the admin panel and dashboards.',
      skills: ['.NET Core', 'Entity Framework Core', 'LINQ', 'Angular', 'SQL Server', 'JWT', 'REST APIs']
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
