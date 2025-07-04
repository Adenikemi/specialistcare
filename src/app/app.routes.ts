import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { ServicesComponent } from './features/services/services.component';
import { ContactComponent } from './features/contact/contact.component';

export const routes: Routes = [
    {   path: "",
        component: HomeComponent
    },
    { path: "services", component: ServicesComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent }
];
