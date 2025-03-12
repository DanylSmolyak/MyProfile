import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [
    NgForOf
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  technologies = [
    { name: 'NET' },
    { name: 'ASP.NET Core' },
    { name: 'OOP' },
    { name: 'LINQ' },
    { name: 'Entity Framework' },
    { name: 'MS SQL' },
    { name: 'JWT' },
    { name: 'API' },
    { name: 'TypeScript' },
    { name: 'Angular' },
    { name: 'HTML & CSS' },
    { name: 'Git' },
    { name: 'Postman' },
    { name: 'SignalR' },
    { name: 'WCF' }
  ];
}
