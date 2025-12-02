import { Routes } from '@angular/router';
import { Loginpage } from './+pages/+public/loginpage/loginpage';
import { AdminNavigationTemplate } from './+pages/+private/admin-navigation-template/admin-navigation-template';

export const routes: Routes = [
    {path:'login',component:Loginpage},
    {path:'admin',component:AdminNavigationTemplate},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];