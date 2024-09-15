import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { KeyComponent } from './pages/key/key.component';



export const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "key/:id", component: KeyComponent},
];
