import { Injectable } from '@angular/core';
import {Project} from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'Tea Shop',
      fullDescription: 'The Tea Shop project is an API designed to handle tea products, customer orders, and user authentication using the specification pattern for efficient query handling. It employs JWT with refresh tokens to ensure secure and seamless user sessions, providing a secure foundation for front-end integration.',
      technologies: ['Angular', 'TypeScript', 'CSS', 'HTML', '.NET', 'Entity Framework', 'SQL Server', 'JWT Auth'],
      githubUrl: 'https://github.com/DanylSmolyak/TeaShopByDan',
    },
    {
      id: 2,
      title: 'Real-Time Chat',
      fullDescription: 'The Real-Time Chat project is a messaging app built with SignalR and ASP.NET Core, featuring JWT authentication, role-based access control, and permissions management for secure and structured communication.',
      technologies: ['.NET Core', 'C#', 'Entity Framework', 'SQL Server', 'JWT Auth', 'SignalR'],
      githubUrl: 'https://github.com/DanylSmolyak?tab=repositories'
    },
    {
      id: 3,
      title: 'WeatherBot',
      fullDescription: 'Developed a Telegram bot for weather forecasts using .NET, Telegram Bot API, and OpenWeatherMap. Implemented command handling, API requests via HttpClient, and JSON response parsing. Added error handling for invalid requests and deployed the bot on a server for stable operation.',
      technologies: ['.NET Core', 'C#', 'Telegram Bot API', 'OpenWeatherMap API', 'JSON Parsing'],
      githubUrl: 'https://github.com/DanylSmolyak/WeatherBot',
    },
    {
      id: 4,
      title: 'WCF Service',
      fullDescription: 'Built a WCF service for communication between different applications. Designed and implemented the service with SOAP protocol to enable interaction between a client and server. The service handled data retrieval and submission, ensuring secure and efficient message exchange.',
      technologies: ['.NET Framework', 'C#', 'WCF', 'SOAP', 'MS SQL'],
      githubUrl: 'https://github.com/DanylSmolyak/SNC',
    }
  ];

  constructor() {}

  getAllProjects(): Project[] {
    return this.projects;
  }

  getProjectById(id: number): Project | undefined {
    return this.projects.find(project => project.id === id);
  }
}
