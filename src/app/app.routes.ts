import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { AdultsResidentialComponent } from './features/adults-residential/adults-residential.component';
import { ChildrensResidentialComponent } from './features/childrens-residential/childrens-residential.component';
import { JoinTeamComponent } from './features/join-team/join-team.component';
import { NewsComponent } from './features/news/news.component';
import { SupportedLivingComponent } from './features/supported-living/supported-living.component';
import { MeetTeamComponent } from './features/meet-team/meet-team.component';
import { ApproachComponent } from './features/approach/approach.component';
import { ValuesComponent } from './features/values/values.component';
import { VisionComponent } from './features/vision/vision.component';
import { LittleAcornsComponent } from './features/little-acorns/little-acorns.component';
import { TopazHouseComponent } from './features/topaz-house/topaz-house.component';
import { FernwoodHouseComponent } from './features/fernwood-house/fernwood-house.component';
import { ComingSoonComponent } from './features/coming-soon/coming-soon.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "about", component: AboutComponent},
    { path: "about/vision", component: VisionComponent },
    { path: "about/approach", component: ApproachComponent },
    { path: "about/values", component: ValuesComponent },
    { path: "about/meet-the-team", component: MeetTeamComponent },
    { path: "adults-residential", component: AdultsResidentialComponent },
    { path: "adults-residential/little-acorns", component: LittleAcornsComponent },
    { path: "adults-residential/high-road-house", component: ComingSoonComponent },
    { path: "adults-residential/earles-garden-house", component: ComingSoonComponent },
    { path: "adults-residential/homesdale-house", component: ComingSoonComponent },
    { path: "childrens-residential", component: ChildrensResidentialComponent },
    { path: "childrens-residential/topaz", component: TopazHouseComponent },
    { path: "join-team", component: JoinTeamComponent },
    { path: "news", component: NewsComponent },
    { path: "supported-living", component: SupportedLivingComponent },
    { path: "supported-living/fernwood", component: FernwoodHouseComponent },
    { path: "contact", component: ContactComponent }
];
