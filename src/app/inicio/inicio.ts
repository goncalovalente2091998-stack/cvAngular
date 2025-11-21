import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.scss'],
})
export class Inicio implements AfterViewInit {

ngAfterViewInit() {
  const imagens = document.querySelectorAll("img.fade-in") as NodeListOf<HTMLImageElement>;

  imagens.forEach(img => {
    img.setAttribute("loading", "lazy");

    img.style.opacity = "0";
    img.style.transition = "opacity 1s ease";

    if (img.classList.contains("loaded")) return;

    const aplicarFade = () => {
      img.style.opacity = "1";
      img.classList.add("loaded");
    };

    if (img.complete) {
      aplicarFade();
    } else {
      img.addEventListener("load", aplicarFade);
    }
  });
}


}
