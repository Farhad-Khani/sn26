import { Routes } from '@angular/router';
import { Loginpage } from './+pages/+public/loginpage/loginpage';

export const routes: Routes = [
    {path:'login',component:Loginpage},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}
];