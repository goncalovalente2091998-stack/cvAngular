import { Component } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  imports: [],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.scss',
})
export class Hobbies {
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
