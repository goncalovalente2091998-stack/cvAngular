import { CommonModule } from '@angular/common';
import { Component,AfterViewInit } from '@angular/core';


interface Certificado {
  title: string;
  description: string;
  img?: string;
  fileUrl: string;
}
@Component({
  selector: 'app-certificados',
  imports: [CommonModule],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados implements AfterViewInit {
  certificados: Certificado[] = [
    { title: 'Epbjc', description: 'Escola', img: 'assets/epbjc.png', fileUrl: 'assets/escola.pdf' },
    { title: 'Web Design', description: 'Web Design', img: 'assets/talenter.png', fileUrl: 'assets/fullstack.pdf' },
    { title: 'Web Dev', description: 'Web Development', img: 'assets/talenter.png', fileUrl: 'assets/webdesign.pdf' },
    { title: 'Chinês', description: 'Chinês B1', img: 'assets/chines.jpeg', fileUrl: 'assets/chines.pdf' },
    { title: 'Scrum Basics', description: 'Scrum Fundamentals', img: 'assets/scrum.jpeg', fileUrl: 'assets/scrum.pdf' },
    { title: 'Az-900', description: 'az-900', img: 'assets/az900.png', fileUrl: 'assets/az900.pdf' },
    { title: 'Git e Github', description: 'git e github', img: 'assets/git.jpg', fileUrl: 'assets/git.pdf' },
    { title: 'Comunicação', description: 'Curso de Criatividade e comunicação', img: 'assets/iefp.png', fileUrl: 'assets/iefp.pdf' },
    { title: 'Coaching', description: 'Coaching', img: 'assets/insti.jpeg', fileUrl: 'assets/coaching.pdf' },
    { title: 'Aux e Dren', description: 'Auxiliar e Drenagem', img: 'assets/borges.png', fileUrl: 'assets/auxfisio.pdf' },
    { title: 'Teste HMI', description: 'HMI', img: 'assets/teste.jpeg', fileUrl: 'assets/hmi.pdf' },
    { title: 'Carta Rec.', description: 'Carta Rec', img: 'assets/happy.png', fileUrl: 'assets/carta.pdf' }
  ];

  ngAfterViewInit() {
    const observador = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
  }
}

