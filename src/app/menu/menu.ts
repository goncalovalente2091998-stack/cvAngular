import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
 isCollapsed = true;
  activeItem = 'Inicio';

  navItems = [
    { label: '', iconSrc: 'assets/curriculos.png', link: 'Inicio' },
    { label: 'Inicío', link: 'Inicio', icon: 'bi bi-house' },
    { label: 'Exp Académica', link: 'ExpAcademica', icon: 'bi bi-briefcase' },
    { label: 'Exp Profissional', link: 'ExpProfissional', icon: 'bi bi-gear' },
    { label: 'Hobbies', link: 'Hobbies', icon: 'bi bi-info-circle' },
    { label: 'Certificados', link: 'Certificados', icon: 'bi bi-envelope' }
  ];
  constructor(private router: Router) {
  
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const currentRoute = event.urlAfterRedirects.replace('/', '');
      const found = this.navItems.find(item => item.link.toLowerCase() === currentRoute.toLowerCase());
      this.activeItem = found?.label || 'Inicio';
    });
  }
setActivo(label: string) {
    this.activeItem = label;
    this.isCollapsed = true;
  }
  
}
