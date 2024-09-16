import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ILink } from './interfaces';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "DevComplete-Studios";
  links: ILink[] = [
    {
      title: "About",
      url: "about",
    },
    {
      title: "F.A.Q",
      url: "faq",
    },
    {
      title: "Support",
      url: "support",
    },
  ];
}
