import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Portfolio';
}

window.onscroll = function () {
  let top = window.scrollY;
  if (top >= 100) {
    header?.classList.add('navbarDark');
  }
  else {
    header?.classList.remove('navbarDark');
  }

}
const header = document.querySelector('.navbar');