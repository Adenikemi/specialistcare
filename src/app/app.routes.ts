import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { AdultsResidentialComponent } from './features/adults-residential/adults-residential.component';
import { ChildrensResidentialComponent } from './features/childrens-residential/childrens-residential.component';
import { JoinTeamComponent } from './features/join-team/join-team.component';
import { NewsComponent } from './features/news/news.component';
import { SupportedLivingComponent } from './features/supported-living/supported-living.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "adults-residential", component: AdultsResidentialComponent },
    { path: "childrens-residential", component: ChildrensResidentialComponent },
    { path: "join-team", component: JoinTeamComponent },
    { path: "news", component: NewsComponent },
    { path: "supported-living", component: SupportedLivingComponent },
    { path: "contact", component: ContactComponent }
];
