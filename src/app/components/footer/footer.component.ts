import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks = [
    { name: 'GitHub', url: 'https://github.com/DanylSmolyak' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/danylo-smolyak-413951352/' },
  ];

  currentYear = new Date().getFullYear();
}
