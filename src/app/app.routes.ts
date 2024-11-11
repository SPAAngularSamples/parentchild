import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'child/:id',component:ChildComponent},
    {path:'',component:HomeComponent}
];
