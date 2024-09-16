import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { KeyComponent } from './pages/key/key.component';
import { FaqComponent } from './pages/faq/faq.component';
import { SupportComponent } from './pages/support/support.component';



export const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "key/:id", component: KeyComponent},
  {path: "faq", component: FaqComponent},
  {path: "support", component: SupportComponent},
];
